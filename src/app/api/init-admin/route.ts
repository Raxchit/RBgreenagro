import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

// GET /api/init-admin - Show setup form
export async function GET() {
  try {
    const adminExists = await db.admin.findFirst()
    
    if (adminExists) {
      return new Response(`
        <!DOCTYPE html>
        <html>
          <body style="font-family: system-ui; max-width: 500px; margin: 100px auto; padding: 20px; text-align: center;">
            <h1>✅ Admin already initialized</h1>
            <p>You can login at <a href="/admin">/admin</a></p>
          </body>
        </html>
      `, {
        headers: { 'Content-Type': 'text/html' }
      })
    }

    return new Response(`
      <!DOCTYPE html>
      <html>
        <body style="font-family: system-ui; max-width: 500px; margin: 100px auto; padding: 20px;">
          <h1>Setup Admin Account</h1>
          <form id="form" style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <label style="display: block; margin-bottom: 8px;">Email</label>
              <input type="email" name="email" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 8px;">Password</label>
              <input type="password" name="password" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px;">
            </div>
            <button type="submit" style="background: #16a34a; color: white; padding: 12px; border: none; border-radius: 6px; font-size: 16px;">Create Admin</button>
          </form>
          <div id="message"></div>
          <script>
            form.onsubmit = async e => {
              e.preventDefault()
              const res = await fetch('/api/init-admin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Object.fromEntries(new FormData(form)))
              })
              const data = await res.json()
              if (res.ok) {
                message.innerHTML = '<h3 style="color: green;">✅ Admin created! <a href="/admin">Click here to login</a></h3>'
                form.remove()
              } else {
                message.innerHTML = '<h3 style="color: red;">❌ ' + (data.error || 'Error') + '</h3>'
              }
            }
          </script>
        </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' }
    })
  } catch {
    return new Response(`
      <!DOCTYPE html>
      <html>
        <body style="font-family: system-ui; max-width: 500px; margin: 100px auto; padding: 20px; text-align: center;">
          <h1>✅ Initialization Complete</h1>
          <p>You can login at <a href="/admin">/admin</a></p>
        </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' }
    })
  }
}

// POST /api/init-admin - Initialize admin account
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Check if admin already exists
    const existingAdmin = await db.admin.findUnique({
      where: { email }
    })

    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create admin
    const admin = await db.admin.create({
      data: {
        email,
        password: hashedPassword
      }
    })

    const { password: _, ...adminData } = admin

    return NextResponse.json({
      admin: adminData,
      message: 'Admin created successfully'
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating admin:', error)
    return NextResponse.json(
      { error: 'Failed to create admin' },
      { status: 500 }
    )
  }
}