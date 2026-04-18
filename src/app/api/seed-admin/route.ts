import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

// POST /api/seed-admin - Seed default admin account
export async function POST(request: Request) {
  try {
    // Check if admin already exists
    const existingAdmin = await db.admin.findUnique({
      where: { email: 'admin' }
    })

    if (existingAdmin) {
      return NextResponse.json({
        message: 'Admin account already exists',
        admin: { email: existingAdmin.email, id: existingAdmin.id }
      })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('admin@123', 10)

    // Create default admin
    const admin = await db.admin.create({
      data: {
        email: 'admin',
        password: hashedPassword
      }
    })

    const { password: _, ...adminData } = admin

    return NextResponse.json({
      admin: adminData,
      message: 'Default admin account created successfully. Email: admin, Password: admin@123'
    }, { status: 201 })
  } catch (error) {
    console.error('Error seeding admin:', error)
    return NextResponse.json(
      { error: 'Failed to seed admin account' },
      { status: 500 }
    )
  }
}

// GET /api/seed-admin - Check if admin exists
export async function GET() {
  try {
    const admin = await db.admin.findUnique({
      where: { email: 'admin' }
    })

    if (admin) {
      return NextResponse.json({
        exists: true,
        admin: { email: admin.email, id: admin.id }
      })
    }

    return NextResponse.json({
      exists: false,
      message: 'No admin account found. Call POST to create one.'
    })
  } catch (error) {
    console.error('Error checking admin:', error)
    return NextResponse.json(
      { error: 'Failed to check admin status' },
      { status: 500 }
    )
  }
}
