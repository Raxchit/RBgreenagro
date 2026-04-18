'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ArrowLeft, Mail, Phone, Calendar, MessageSquare } from 'lucide-react'

interface Feedback {
  id: string
  name: string
  email: string
  phone?: string
  message: string
  createdAt: string
}

export default function AdminFeedbackPage() {
  const router = useRouter()
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (!auth) {
      router.push('/admin')
      return
    }
    fetchFeedback()
  }, [router])

  const fetchFeedback = async () => {
    try {
      const response = await fetch('/api/feedback')
      const data = await response.json()
      setFeedback(data)
    } catch (error) {
      console.error('Error fetching feedback:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Simple Header */}
      <div className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => router.push('/admin')}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-xl font-bold">Feedback Management</h1>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {loading ? (
              <div className="text-center py-20">
                <div className="h-8 w-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading feedback...</p>
              </div>
            ) : feedback.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <MessageSquare className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Feedback Yet</h3>
                  <p className="text-gray-600">
                    No feedback has been submitted yet. Check back later.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Total Feedback: {feedback.length}
                  </h2>
                </div>
                {feedback.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(item.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <a
                            href={`mailto:${item.email}`}
                            className="text-blue-600 hover:underline text-sm"
                          >
                            {item.email}
                          </a>
                        </div>
                        {item.phone && (
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{item.phone}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Message:</h4>
                        <ScrollArea className="h-32 w-full rounded-md border p-4">
                          <p className="text-gray-600 text-sm whitespace-pre-wrap">
                            {item.message}
                          </p>
                        </ScrollArea>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
