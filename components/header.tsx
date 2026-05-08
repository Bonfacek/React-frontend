"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const { isLoggedIn, loading, username } = useAuth()
  const headerRef = useRef<HTMLElement>(null)
  const desktopServicesRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const Services = [
    { name: "Biogas Construction", href: "/services/biogas" },
    { name: "Civil Works", href: "/services/civil" },
    { name: "Electrical Installations", href: "/services/electrical" },
    { name: "Telecom Networks", href: "/services/telecom" },
  ]

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false)
        setMobileServicesOpen(false)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  // Close mobile menu on outside tap/click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node
      if (headerRef.current && !headerRef.current.contains(target)) {
        setIsOpen(false)
        setMobileServicesOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
      document.addEventListener("touchstart", handleOutsideClick)
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.removeEventListener("touchstart", handleOutsideClick)
    }
  }, [isOpen])

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (desktopServicesRef.current && !desktopServicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    if (servicesOpen) {
      document.addEventListener("mousedown", handleOutside)
    }
    return () => document.removeEventListener("mousedown", handleOutside)
  }, [servicesOpen])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 120)
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-background border-b border-border"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-15 h-12 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
            <img src="/icon.jpg" alt="JT" className="w-15 h-15 object-cover" />
          </div>
          <span className="font-bold text-xl text-primary hidden sm:inline">JawaTech</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/#home">Home</NavLink>
          <NavLink href="/#about">About</NavLink>

          {/* Services Dropdown — uses padding bridge to eliminate hover gap */}
          <div
            ref={desktopServicesRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-bold"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Invisible bridge fills the gap so hover doesn't break */}
            {servicesOpen && (
              <div className="absolute left-0 w-full h-3 top-full" />
            )}

            <div
              className={`absolute left-0 top-[calc(100%+10px)] w-56 bg-background rounded-lg shadow-xl border border-border py-2 z-50 transition-all duration-150 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {Services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-4 py-2.5 text-foreground hover:bg-primary/10 hover:text-primary transition-colors text-sm"
                  onClick={() => setServicesOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <NavLink href="/#experience">Experience</NavLink>
          <NavLink href={!loading && isLoggedIn ? "/quote" : "/login?returnTo=/quote"}>
            Get Consultation
          </NavLink>

          {!loading && (
            isLoggedIn ? (
              <Link
                href="/logout"
                className="text-foreground hover:text-primary transition-colors font-bold hover:underline"
              >
                Logout
              </Link>
            ) : (
              <NavLink href="/login">Login</NavLink>
            )
          )}

          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-1 rounded-md text-foreground hover:text-primary transition-colors"
          onClick={() => {
            setIsOpen((prev) => !prev)
            setMobileServicesOpen(false)
          }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden border-border bg-background overflow-hidden transition-all duration-70 ease-in-out ${
          isOpen ? "max-h-[600px] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          <MobileNavLink href="/#home" onClose={() => setIsOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="/#about" onClose={() => setIsOpen(false)}>About</MobileNavLink>

          {/* Mobile Services Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="flex items-center justify-between w-full text-foreground hover:text-primary py-3 font-bold transition-colors"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileServicesOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-1 border-l-2 border-primary/20 ml-2">
                {Services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-2.5 text-foreground/80 hover:text-primary transition-colors text-sm"
                    onClick={() => {
                      setMobileServicesOpen(false)
                      setIsOpen(false)
                    }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <MobileNavLink href="/#experience" onClose={() => setIsOpen(false)}>
            Experience
          </MobileNavLink>
          <MobileNavLink
            href={!loading && isLoggedIn ? "/quote" : "/login?returnTo=/quote"}
            onClose={() => setIsOpen(false)}
          >
            Get Consultation
          </MobileNavLink>

          {!loading && (
            isLoggedIn ? (
              <Link
                href="/logout"
                className="block py-3 text-foreground hover:text-primary transition-colors font-bold"
                onClick={() => setIsOpen(false)}
              >
                Logout
              </Link>
            ) : (
              <MobileNavLink href="/login" onClose={() => setIsOpen(false)}>Login</MobileNavLink>
            )
          )}

          <div className="pt-2">
            <Link
              href="/contact"
              className="block bg-primary text-primary-foreground px-4 py-3 rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-foreground hover:text-primary font-bold transition-colors duration-200 group px-1"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  )
}

function MobileNavLink({
  href,
  onClose,
  children,
}: {
  href: string
  onClose: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="block py-3 text-foreground hover:text-primary transition-colors font-bold"
      onClick={onClose}
    >
      {children}
    </Link>
  )
}