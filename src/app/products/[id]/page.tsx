'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, CheckCircle2, XCircle, Package, Star } from 'lucide-react'
import Link from 'next/link'
import { Skeleton } from '@/components/ui/skeleton'

interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
  price: string
  inStock: boolean
  createdAt: string
  updatedAt: string
}

export default function ProductViewPage() {
  const params = useParams()
  const id = params.id as string
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) return

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`)
        if (!response.ok) {
          throw new Error('Product not found')
        }
        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Skeleton className="h-8 w-32 mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Skeleton className="h-96 w-full rounded-2xl" />
                <div className="space-y-4">
                  <Skeleton className="h-10 w-3/4" />
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-12 w-48" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto text-center">
              <Package className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
              <p className="text-gray-600 mb-8">{error || 'The product you are looking for does not exist.'}</p>
              <Link href="/products">
                <Button className="bg-green-600 hover:bg-green-700">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Products
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-green-600">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-green-600">Products</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium truncate max-w-xs">{product.name}</span>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/no-image.svg'
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-white/90 backdrop-blur text-sm">
                      {product.category}
                    </Badge>
                  </div>
                  {!product.inStock && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="destructive" className="text-sm">
                        <XCircle className="h-3 w-3 mr-1" />
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                  {product.inStock && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-sm">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        In Stock
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      {product.name}
                    </h1>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline">{product.category}</Badge>
                      {product.inStock ? (
                        <span className="flex items-center text-green-600 text-sm font-medium">
                          <CheckCircle2 className="h-4 w-4 mr-1" />
                          Available
                        </span>
                      ) : (
                        <span className="flex items-center text-red-500 text-sm font-medium">
                          <XCircle className="h-4 w-4 mr-1" />
                          Out of Stock
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-4xl font-bold text-green-600">
                    Rs. {product.price}
                  </div>

                  <div className="border-t pt-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {product.description}
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Product Highlights</h2>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600 text-sm">
                        <Star className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        Premium quality agricultural product
                      </li>
                      <li className="flex items-center text-gray-600 text-sm">
                        <Star className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        Sourced from trusted manufacturers
                      </li>
                      <li className="flex items-center text-gray-600 text-sm">
                        <Star className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        Fast delivery across Nepal
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {product.inStock ? (
                      <Link href="/contact" className="flex-1">
                        <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                          Contact to Buy
                        </Button>
                      </Link>
                    ) : (
                      <Button size="lg" className="w-full" disabled>
                        Out of Stock
                      </Button>
                    )}
                    <Link href="/products" className="flex-1">
                      <Button size="lg" variant="outline" className="w-full">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        All Products
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
                    <p className="text-gray-600 text-sm">
                      All our products go through strict quality control measures
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <Package className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                    <p className="text-gray-600 text-sm">
                      Quick and reliable delivery to your location
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <Star className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
                    <p className="text-gray-600 text-sm">
                      Our team is always ready to help you choose the right product
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}