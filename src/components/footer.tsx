import Link from 'next/link'
import { Leaf, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="RB GREEN AGRO BANGYA INDUSTRIES PVT LTD" className="h-6 w-6" />
              <span className="text-xl font-bold">RB GREEN AGRO BANGYA INDUSTRIES PVT LTD</span>
            </div>
            <p className="text-sm text-gray-300 mb-4 max-w-md">
              Your trusted partner for premium quality fertilizers and agricultural solutions in Nepal.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-green-500" />
                <span>Nijghad-Bara, Nepal</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 text-green-500" />
                <span>+977 9822217062</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 text-green-500" />
                <span>rbagro100@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Sunday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} RB GREEN AGRO BANGYA INDUSTRIES PVT LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
