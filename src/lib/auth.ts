import { createHmac, timingSafeEqual } from 'node:crypto'
import type { Admin } from '@prisma/client'
import { NextResponse } from 'next/server'

const SESSION_COOKIE_NAME = 'rb_admin_session'
const SESSION_DURATION_SECONDS = 60 * 60 * 12

export interface AdminSession {
  adminId: string
  email: string
  exp: number
}

function getSessionSecret() {
  const secret = process.env.SESSION_SECRET || process.env.NEXTAUTH_SECRET

  if (!secret) {
    throw new Error('Missing SESSION_SECRET or NEXTAUTH_SECRET environment variable')
  }

  return secret
}

function encodeBase64Url(value: string) {
  return Buffer.from(value, 'utf8').toString('base64url')
}

function decodeBase64Url(value: string) {
  return Buffer.from(value, 'base64url').toString('utf8')
}

function signValue(value: string) {
  return createHmac('sha256', getSessionSecret()).update(value).digest('base64url')
}

export function createAdminSessionToken(admin: Pick<Admin, 'id' | 'email'>) {
  const payload: AdminSession = {
    adminId: admin.id,
    email: admin.email,
    exp: Date.now() + SESSION_DURATION_SECONDS * 1000,
  }

  const encodedPayload = encodeBase64Url(JSON.stringify(payload))
  const signature = signValue(encodedPayload)

  return `${encodedPayload}.${signature}`
}

export function verifyAdminSessionToken(token?: string | null): AdminSession | null {
  if (!token) {
    return null
  }

  const [encodedPayload, providedSignature] = token.split('.')

  if (!encodedPayload || !providedSignature) {
    return null
  }

  const expectedSignature = signValue(encodedPayload)
  const providedBuffer = Buffer.from(providedSignature)
  const expectedBuffer = Buffer.from(expectedSignature)

  if (providedBuffer.length !== expectedBuffer.length) {
    return null
  }

  if (!timingSafeEqual(providedBuffer, expectedBuffer)) {
    return null
  }

  try {
    const payload = JSON.parse(decodeBase64Url(encodedPayload)) as AdminSession

    if (!payload.adminId || !payload.email || !payload.exp) {
      return null
    }

    if (payload.exp <= Date.now()) {
      return null
    }

    return payload
  } catch {
    return null
  }
}

export function getSessionTokenFromRequest(request: Request) {
  const cookieHeader = request.headers.get('cookie')

  if (!cookieHeader) {
    return null
  }

  const cookies = cookieHeader.split(';').map((cookie) => cookie.trim())

  for (const cookie of cookies) {
    if (cookie.startsWith(`${SESSION_COOKIE_NAME}=`)) {
      return decodeURIComponent(cookie.slice(SESSION_COOKIE_NAME.length + 1))
    }
  }

  return null
}

export function getAdminSessionFromRequest(request: Request) {
  const token = getSessionTokenFromRequest(request)
  return verifyAdminSessionToken(token)
}

export function setAdminSessionCookie(
  response: NextResponse,
  admin: Pick<Admin, 'id' | 'email'>
) {
  const token = createAdminSessionToken(admin)

  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_DURATION_SECONDS,
  })

  return response
}

export function clearAdminSessionCookie(response: NextResponse) {
  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: '',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  })

  return response
}

export function ensureSameOrigin(request: Request) {
  const origin = request.headers.get('origin')

  if (!origin) {
    return true
  }

  try {
    return new URL(origin).origin === new URL(request.url).origin
  } catch {
    return false
  }
}

export function unauthorizedJson(message = 'Unauthorized') {
  return NextResponse.json({ error: message }, { status: 401 })
}
