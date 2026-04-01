"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const Services = [
    { name: "Biogas Construction", href: "/services/biogas" },
    { name: "Civil Works", href: "/services/civil" },
    { name: "Electrical Installations", href: "/services/electrical" },
    { name: "Telecom Networks", href: "/services/telecom" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/#about" className="flex items-center gap-2">
          <div className="w-15 h-12 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
            <span className="text-primary-foreground font-bold text-lg">
              <img src="/icon.jpg" alt="JT" className="w-15 h-15 object-cover" />
            </span>
          </div>
          <span className="font-bold text-xl text-primary hidden sm:inline">JawaTech</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/#home">Home</NavLink>
          <NavLink href="/#about">About</NavLink>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-bold">
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-border py-2 z-50 animate-in fade-in slide-in-from-top-2">
                {Services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2.5 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setServicesOpen(false)} // ✅ fixed
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink href="/#experience">Experience</NavLink>
          <NavLink href="/login">Get Consultation</NavLink>
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in-up">
          <div className="px-4 py-4 space-y-4">
            <MobileNavLink href="/#home" setIsOpen={setIsOpen}>Home</MobileNavLink>
            <MobileNavLink href="/#about" setIsOpen={setIsOpen}>About</MobileNavLink>

            {/* Mobile Services Accordion */}
            <div className="space-y-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-primary py-2"
              >
                <span className="font-bold">Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 space-y-2 border-l-2 border-primary/20 ml-2">
                  {Services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                      onClick={() => {
                        setMobileServicesOpen(false)
                        setIsOpen(false)
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <MobileNavLink href="/#experience" setIsOpen={setIsOpen}>Experience</MobileNavLink>
            <MobileNavLink href="/login" setIsOpen={setIsOpen}>Get Consultation</MobileNavLink>   
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

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-foreground hover:text-primary transition-colors font-bold hover:underline">
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  setIsOpen,
  children,
}: {
  href: string
  setIsOpen: (value: boolean) => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="block text-foreground hover:text-primary transition-colors font-bold"
      onClick={() => setIsOpen(false)} // ✅ fixed
    >
      {children}
    </Link>
  )
}