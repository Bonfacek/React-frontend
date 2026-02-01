"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">JT</span>
          </div>
          <span className="font-bold text-xl text-primary hidden sm:inline">JawaTech</span>
        </Link>

        {/* Simplified Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/#experience" className="text-foreground hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="/quote" className="text-foreground hover:text-primary transition-colors">
            Get Quote
          </Link>
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Simplified Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in-up">
          <div className="px-4 py-4 space-y-4">
            <Link href="/#home" className="block text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/#about" className="block text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link
              href="/#services"
              className="block text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#experience"
              className="block text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
            <Link href="/quote" className="block text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
              Get Quote
            </Link>
            <Link
              href="/contact"
              className="block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
