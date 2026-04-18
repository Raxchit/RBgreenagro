'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Lock, AlertCircle, LogOut } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function AdminPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminEmail, setAdminEmail] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth) {
      const parsedAuth = JSON.parse(auth)
      setIsAuthenticated(true)
      setAdminEmail(parsedAuth.email)
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('adminAuth', JSON.stringify(data.admin))
        setIsAuthenticated(true)
        setAdminEmail(data.admin.email)
        toast({
          title: 'Login Successful',
          description: 'Welcome back, Admin!',
          variant: 'default',
        })
      } else {
        toast({
          title: 'Login Failed',
          description: data.error || 'Invalid credentials',
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to login. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    setIsAuthenticated(false)
    setAdminEmail('')
    toast({
      title: 'Logged Out',
      description: 'You have been logged out successfully.',
      variant: 'default',
    })
  }

  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navigation />

        <main className="flex-1">
          {/* Admin Header */}
          <div className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                  <p className="text-gray-400 mt-1">Welcome back, {adminEmail}</p>
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>

          {/* Admin Dashboard Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Feedback Management */}
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.location.href = '/admin/feedback'}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>View Feedback</span>
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Lock className="h-5 w-5 text-green-600" />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    View and manage customer feedback and inquiries
                  </p>
                </CardContent>
              </Card>

              {/* Product Management */}
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.location.href = '/admin/products'}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Manage Products</span>
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Lock className="h-5 w-5 text-blue-600" />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Add, edit, or delete products from the catalog
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Setup Admin Account */}
            <div className="mt-12 max-w-2xl mx-auto">
              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-yellow-600" />
                    First Time Setup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    If you haven't created an admin account yet, you can set one up now. Remember your credentials as you'll need them to access the admin panel.
                  </p>
                  <div className="space-y-3">
                    <Input type="email" id="setupEmail" placeholder="Admin email" />
                    <Input type="password" id="setupPassword" placeholder="Admin password" />
                    <Button
                      onClick={async () => {
                        const email = (document.getElementById('setupEmail') as HTMLInputElement).value
                        const password = (document.getElementById('setupPassword') as HTMLInputElement).value

                        if (!email || !password) {
                          toast({
                            title: 'Error',
                            description: 'Please fill in all fields',
                            variant: 'destructive',
                          })
                          return
                        }

                        try {
                          const response = await fetch('/api/init-admin', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ email, password })
                          })

                          const data = await response.json()

                          if (response.ok) {
                            toast({
                              title: 'Success!',
                              description: 'Admin account created successfully',
                              variant: 'default',
                            })
                          } else {
                            toast({
                              title: 'Error',
                              description: data.error || 'Failed to create admin',
                              variant: 'destructive',
                            })
                          }
                        } catch (error) {
                          toast({
                            title: 'Error',
                            description: 'Failed to create admin account',
                            variant: 'destructive',
                          })
                        }
                      }}
                      className="w-full"
                    >
                      Create Admin Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <main className="flex-1">
        {/* Login Section */}
        <div className="min-h-[80vh] flex items-center justify-center py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Lock className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
                  <p className="text-gray-600 text-sm mt-2">
                    Enter your credentials to access the admin dashboard
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="admin@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      {isLoading ? 'Logging in...' : 'Login'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Setup Info */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>First time?</strong> After logging in, you'll need to create an admin account using the setup form in the dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
