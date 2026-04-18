'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import {
  Leaf,
  Truck,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Clock
} from 'lucide-react'

interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
  price: string
  inStock: boolean
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

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
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Premium Quality Fertilizers
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Empowering Agriculture in
                  <span className="text-green-600 block">Nepal for Over 15 Years</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  RB Agro provides high-quality fertilizers and agricultural solutions to help farmers maximize their crop yields and achieve sustainable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products">
                    <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                      Explore Products
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 p-8 text-white shadow-2xl">
                  <div className="h-full flex flex-col justify-center items-center space-y-6">
                    <Leaf className="h-32 w-32 text-white/90" />
                    <div className="text-center space-y-2">
                      <h3 className="text-3xl font-bold">Growing Together</h3>
                      <p className="text-green-100 text-lg">Your Success, Our Mission</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-white border-y">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Happy Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* About/Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-gray-600">
                Committed to empowering Nepalese farmers with quality agricultural products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-green-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide farmers across Nepal with access to high-quality, affordable fertilizers and agricultural solutions that maximize crop productivity while promoting sustainable farming practices. We strive to be the trusted partner in every farmer's journey toward agricultural success.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become Nepal's leading agricultural supplier, known for quality, reliability, and innovation. We envision a future where every farmer has access to world-class agricultural products and expert guidance, contributing to the nation's food security and economic growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose RB Agro?
              </h2>
              <p className="text-lg text-gray-600">
                Your trusted partner for all agricultural needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Premium Quality</h3>
                  <p className="text-gray-600 text-sm">
                    We source only the highest quality fertilizers from trusted manufacturers to ensure optimal results for your crops.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Fast Delivery</h3>
                  <p className="text-gray-600 text-sm">
                    Quick and reliable delivery across Nighad and surrounding areas, ensuring you get products when you need them.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Expert Guidance</h3>
                  <p className="text-gray-600 text-sm">
                    Our experienced team provides expert advice on fertilizer selection and usage for maximum crop yield.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Trusted Partner</h3>
                  <p className="text-gray-600 text-sm">
                    Over 15 years of trusted service to farmers in Nepal, building long-lasting relationships based on reliability.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Timely Support</h3>
                  <p className="text-gray-600 text-sm">
                    24/7 customer support to address your queries and provide assistance whenever you need it.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Competitive Pricing</h3>
                  <p className="text-gray-600 text-sm">
                    We offer competitive prices without compromising on quality, making agriculture more affordable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-gray-600">
                Discover our premium quality fertilizers
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[...Array(4)].map((_, i) => (
                  <Card key={i}>
                    <div className="h-48 bg-gray-200 animate-pulse" />
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse" />
                    </div>
                  </Card>
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-6">No products available yet.</p>
                <Link href="/admin">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Add Products
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                {products.slice(0, 8).map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=No+Image'
                        }}
                      />
                      {!product.inStock && (
                        <div className="absolute top-2 right-2">
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-green-600">
                          Rs. {product.price}
                        </div>
                        <Link href="/products">
                          <Button size="sm" variant="outline" className="text-xs">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <div className="text-center">
              <Link href="/products">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Product Categories Preview */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Product Range
              </h2>
              <p className="text-lg text-green-100">
                Everything you need for successful farming
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:bg-white/20 transition-all">
                  <div className="h-16 w-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Leaf className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Organic Fertilizers</h3>
                  <p className="text-green-100 text-sm">
                    Natural and eco-friendly options for sustainable agriculture
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:bg-white/20 transition-all">
                  <div className="h-16 w-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">NPK Fertilizers</h3>
                  <p className="text-green-100 text-sm">
                    Balanced nutrient solutions for optimal crop growth
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:bg-white/20 transition-all">
                  <div className="h-16 w-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Micronutrients</h3>
                  <p className="text-green-100 text-sm">
                    Essential trace elements for healthy plant development
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/products">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Boost Your Farm's Productivity?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Connect with us today and discover how RB Agro can help you achieve better yields and sustainable farming practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
