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
                Empowering farmers with quality agricultural solutions for over 15 years
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
                  Founded in 2015, RB GREEN AGRO BANGYA INDUSTRIES PVT LTD began with a simple yet powerful vision: to provide farmers in Nepal with access to high-quality, affordable fertilizers that would help them maximize their crop yields and improve their livelihoods.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Starting as a small operation in Nighad, we have grown over the years to become a trusted name in the agricultural sector, serving hundreds of farmers across the region. Our commitment to quality, reliability, and customer satisfaction has been the cornerstone of our success.
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
                  <p className="text-gray-600 text-sm">15+ years of service to farmers in Nepal</p>
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

        {/* Open Source Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Open Source Project
              </h2>
              <p className="text-lg text-gray-600">
                This project is open source and available on GitHub
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-gray-900 flex items-center justify-center text-white">
                    <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">GitHub</h3>
                  <p className="text-green-600 font-medium mb-4">Source Code</p>
                  <p className="text-gray-600 mb-6">
                    View source code, report issues, and contribute to this project
                  </p>
                  <a href="https://github.com/Raxchit/RBgreenagro" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gray-900 hover:bg-gray-800">
                      View on GitHub
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-black flex items-center justify-center">
                    <svg className="h-12 w-12" viewBox="0 0 76 65" fill="white">
                      <path d="M75 0L0 33l75 32v-21l-36-11 36-12V0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Vercel</h3>
                  <p className="text-green-600 font-medium mb-4">Deployed On</p>
                  <p className="text-gray-600 mb-6">
                    Live production deployment hosted on Vercel platform
                  </p>
                  <a href="https://r-bgreenagro.vercel.app" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-black hover:bg-gray-900">
                      View Deployment
                    </Button>
                  </a>
                </CardContent>
              </Card>
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
                <p className="text-green-100 text-sm">Nighad, Nepal</p>
              </div>

              <div className="text-center">
                <div className="h-14 w-14 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-green-100 text-sm">+977 9822217062</p>
              </div>

              <div className="text-center">
                <div className="h-14 w-14 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-green-100 text-sm">rachitkalwar92@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
