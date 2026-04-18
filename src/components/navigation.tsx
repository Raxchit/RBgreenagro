'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Leaf, Phone, Mail } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-foreground">RB Agro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-green-600">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium transition-colors hover:text-green-600">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-green-600">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-green-600">
              Contact
            </Link>
            <Link href="/feedback" className="text-sm font-medium transition-colors hover:text-green-600">
              Feedback
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/feedback"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Feedback
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
