import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/feedback - Get all feedback (for admin)
export async function GET() {
  try {
    const feedback = await db.feedback.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(feedback)
  } catch (error) {
    console.error('Error fetching feedback:', error)
    return NextResponse.json(
      { error: 'Failed to fetch feedback' },
      { status: 500 }
    )
  }
}

// POST /api/feedback - Submit feedback
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const feedback = await db.feedback.create({
      data: {
        name,
        email,
        phone,
        message
      }
    })

    return NextResponse.json(feedback, { status: 201 })
  } catch (error) {
    console.error('Error submitting feedback:', error)
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    )
  }
}
