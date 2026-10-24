"use client"

import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with JawaTech. We're here to answer your questions and discuss your project needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Available Monday - Friday, 9 AM - 5 PM EAT</p>
              <a href="tel:+254724760944" className="inline-block text-primary hover:text-primary/80 font-bold text-lg">
                +254 724 760 944
              </a>
            </div>

            {/* Email */}
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">We'll respond within 24 hours</p>
              <a
                href="/quote"
                className="inline-block text-primary hover:text-primary/80 font-bold text-lg break-all"
              >
                karaninjoroge005@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Quick chat with our team</p>
              <a
                href="https://wa.me/254724760944"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:text-primary/80 font-bold text-lg"
              >
                Start Chat
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Our Location</h3>
                <p className="text-muted-foreground">Nairobi, Kenya</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
