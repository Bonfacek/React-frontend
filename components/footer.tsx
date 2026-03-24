"use client"

import Link from "next/link"
import { Mail, Phone, MapPin,Twitter, Facebook, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info - Updated to JawaTech */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-15 h-15 bg-primary-foreground rounded-lg flex items-center justify-center overflow-hidden">
                <span className="w-15 h-15 rounded-full"><img src="/icon.jpg" alt="JT" className="w-full h-full object-cover" /></span>
              </div>
              <span className="font-bold text-lg height-6">JawaTech</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Leading provider of comprehensive engineering and construction solutions in Africa.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/254724760944"
                className="hover:text-accent transition-colors" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/biogas"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Biogas Construction
                </Link>
              </li>
              <li>
                <Link href="/services/civil" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/electrical"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Electrical Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/telecom"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Telecommunications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Updated location to Nairobi Kenya and added phone number */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+254724760944"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+254 724 760 944</span>
              </a>
              <a
                href="/quote"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@jawatech.com</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "100px" }}>
          <p className="text-primary-foreground/80">&copy; 2025 JawaTech Engineering. All rights reserved.</p>
           <p className="text-primary-foreground/80" style={{color:"greenyellow", font:"icon"}}>&copy; 2025 Designed & Developed by Jalsoft</p>
        </div>
      </div>
    </footer>
  )
}
