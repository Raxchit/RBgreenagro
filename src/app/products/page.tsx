'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Leaf, Package, TrendingUp, CheckCircle2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
  price: string
  inStock: boolean
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = ['All', 'Organic Fertilizers', 'NPK Fertilizers', 'Micronutrients']

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Our Products
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Premium quality fertilizers for healthy crops and better yields
              </p>
              <Link href="/">
                <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-0">
                      <Skeleton className="h-48 w-full rounded-t-lg" />
                      <div className="p-6 space-y-3">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-20 w-full" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <Package className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">
                  {selectedCategory === 'All'
                    ? 'No products available at the moment. Please check back later.'
                    : `No products in the ${selectedCategory} category.`}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {!product.inStock && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                      )}
                      {product.inStock && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-green-600">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            In Stock
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-green-600">
                          Rs. {product.price}
                        </div>
                        <Link href="/contact">
                          <Button
                            disabled={!product.inStock}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Contact to Buy
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Our Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Products?
              </h2>
              <p className="text-lg text-gray-600">
                Quality you can trust for better yields
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-green-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Leaf className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Premium Quality</h3>
                  <p className="text-gray-600 text-sm">
                    All products are sourced from trusted manufacturers and tested for quality
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Proven Results</h3>
                  <p className="text-gray-600 text-sm">
                    Our fertilizers have been proven to increase crop yields significantly
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Expert Approved</h3>
                  <p className="text-gray-600 text-sm">
                    Recommended by agricultural experts for optimal crop growth
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
