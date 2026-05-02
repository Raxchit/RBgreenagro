'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Award,
  Target,
  Heart,
  Users,
  Leaf,
  TrendingUp,
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                About RB GREEN AGRO BANGYA INDUSTRIES PVT LTD
              </h1>
              <p className="text-xl text-green-100">
                Empowering farmers with quality agricultural solutions for over 5 years
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2021, RB GREEN AGRO BANGYA INDUSTRIES PVT LTD began with a simple yet powerful vision: to provide farmers in Nepal with access to high-quality, affordable fertilizers that would help them maximize their crop yields and improve their livelihoods.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Starting as a small operation in Nijghad, we have grown over the years to become a trusted name in the agricultural sector, serving hundreds of farmers across the region. Our commitment to quality, reliability, and customer satisfaction has been the cornerstone of our success.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we continue to expand our product offerings and services, always keeping our focus on the needs of our farming community and the broader goal of supporting Nepal's agricultural development.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Quality First</h3>
                      <p className="text-gray-600 text-sm">We never compromise on product quality</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Customer Focused</h3>
                      <p className="text-gray-600 text-sm">Your success is our priority</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Continuous Growth</h3>
                      <p className="text-gray-600 text-sm">Always improving and expanding</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-green-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower farmers across Nepal with premium quality fertilizers and agricultural solutions that maximize crop productivity while promoting sustainable farming practices and environmental stewardship.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <Award className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become Nepal's most trusted and innovative agricultural supplier, known for excellence in product quality, customer service, and commitment to advancing the nation's agricultural sector.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <Heart className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Values</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Integrity, quality, innovation, and sustainability. We believe in building long-term relationships with our customers based on trust and mutual success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive agricultural solutions for every need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-lg bg-green-100 flex items-center justify-center">
                    <Leaf className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Organic Fertilizers</h3>
                  <p className="text-gray-600 text-sm">
                    Natural and eco-friendly options for sustainable agriculture
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-lg bg-green-100 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">NPK Fertilizers</h3>
                  <p className="text-gray-600 text-sm">
                    Balanced nutrient solutions for optimal crop growth
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-lg bg-green-100 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Micronutrients</h3>
                  <p className="text-gray-600 text-sm">
                    Essential trace elements for healthy plant development
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-lg bg-green-100 flex items-center justify-center">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Expert Advice</h3>
                  <p className="text-gray-600 text-sm">
                    Professional guidance on fertilizer selection and usage
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose RB GREEN AGRO BANGYA INDUSTRIES PVT LTD */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose RB GREEN AGRO BANGYA INDUSTRIES PVT LTD?
              </h2>
              <p className="text-lg text-gray-600">
                The RB GREEN AGRO BANGYA INDUSTRIES PVT LTD advantage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">Premium Quality</h3>
                  <p className="text-gray-600 text-sm">Only the highest quality products from trusted manufacturers</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">Fast Delivery</h3>
                  <p className="text-gray-600 text-sm">Quick and reliable delivery to your farm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">Expert Team</h3>
                  <p className="text-gray-600 text-sm">Experienced professionals ready to assist you</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">Trusted Partner</h3>
                  <p className="text-gray-600 text-sm">5+ years of service to farmers in Nepal</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">Competitive Prices</h3>
                  <p className="text-gray-600 text-sm">Affordable rates without compromising quality</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">Customer Focus</h3>
                  <p className="text-gray-600 text-sm">Your satisfaction is our top priority</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Contact Info */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-green-100">
                We'd love to hear from you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="h-14 w-14 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <MapPin className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-green-100 text-sm">Nijghad, Nepal</p>
              </div>

              <div className="text-center">
                <div className="h-14 w-14 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-green-100 text-sm">+977 98********</p>
              </div>

              <div className="text-center">
                <div className="h-14 w-14 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-green-100 text-sm">rbagro100@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
