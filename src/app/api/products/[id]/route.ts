import { NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'
import { db } from '@/lib/db'

// GET /api/products/[id] - Get a single product
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  try {
    const product = await db.product.findUnique({
      where: { id }
    })

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}

// PUT /api/products/[id] - Update a product
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  try {
    const body = await request.json()
    const { name, description, image, category, price, inStock } = body

    const product = await db.product.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(image && { image }),
        ...(category && { category }),
        ...(price && { price }),
        ...(inStock !== undefined && { inStock })
      }
    })

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    )
  }
}

// DELETE /api/products/[id] - Delete a product
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  console.log('DELETE request for product ID:', id)

  if (!id) {
    return NextResponse.json(
      { error: 'Missing product ID' },
      { status: 400 }
    )
  }

  try {
    console.log('Attempting to delete product from database...')
    await db.product.delete({
      where: { id }
    })

    console.log('Product deleted successfully')
    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (error: any) {
    console.error('Error deleting product:', error)

    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    )
  }
}
