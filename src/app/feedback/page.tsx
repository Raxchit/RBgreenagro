'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MessageSquare, CheckCircle2, ArrowLeft, Star } from 'lucide-react'
import Link from 'next/link'
import { useToast } from '@/hooks/use-toast'

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Thank you for your feedback. We appreciate it!',
          variant: 'default',
        })
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        throw new Error('Failed to submit feedback')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit feedback. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <MessageSquare className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                We Value Your Feedback
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Help us improve by sharing your thoughts and suggestions
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

        {/* Feedback Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              {isSubmitted ? (
                <Card className="border-2 border-green-200">
                  <CardContent className="p-12 text-center">
                    <div className="h-20 w-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Thank You!
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      We appreciate your feedback. Your input helps us improve our products and services.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Submit Another Feedback
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl font-bold text-gray-900">
                      Share Your Feedback
                    </CardTitle>
                    <p className="text-gray-600 mt-2">
                      We'd love to hear from you. Please fill out the form below.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          placeholder="+977 XXXXXXXXXX"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Feedback *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us what you think about our products and services..."
                          rows={8}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Why Feedback Matters */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Your Feedback Matters
              </h2>
              <p className="text-lg text-gray-600">
                Your voice helps shape our business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Improve Products
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Your feedback helps us understand what products work best for you
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Better Service
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We use your input to enhance our customer service and support
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Grow Together
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Together we can build a stronger agricultural community
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Need Immediate Help?
              </h2>
              <p className="text-gray-600 mb-8">
                If you have urgent questions or need assistance, please contact us directly.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Contact Us Directly
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
