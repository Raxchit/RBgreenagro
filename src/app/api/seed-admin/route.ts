import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

// POST /api/seed-admin - Seed default admin account (DISABLED FOR SECURITY)
export async function POST(request: Request) {
  return NextResponse.json(
    { error: 'Admin seeding is disabled for security reasons. Use /api/init-admin instead.' },
    { status: 403 }
  )
}

// GET /api/seed-admin - Check if admin exists (DISABLED FOR SECURITY)
export async function GET() {
  return NextResponse.json(
    { error: 'Admin seeding endpoints are disabled for security reasons.' },
    { status: 403 }
  )
}
