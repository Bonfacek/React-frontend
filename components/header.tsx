"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const { isLoggedIn, loading } = useAuth()
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 120)
  }

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-background border-b border-border"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="w-15 h-12 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/icon.jpg" alt="JT" className="w-15 h-15 object-cover" />
            </div>
            <span className="font-bold text-xl text-primary hidden sm:inline">JawaTech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/#home">Home</NavLink>
            <NavLink href="/#about">About</NavLink>

            {/* Services Dropdown */}
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
                aria-expanded={servicesOpen ? "true" : "false"}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && <div className="absolute left-0 w-full h-3 top-full" />}

              <div
                className={`absolute left-0 top-[calc(100%+10px)] w-56 bg-background rounded-lg shadow-xl border border-border py-2 z-50 transition-all duration-150 ${
                  servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
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
                <Link href="/logout" className="text-foreground hover:text-primary transition-colors font-bold hover:underline">
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

          {/* Mobile — Hamburger button with animated bars */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary/10 active:bg-primary/20 transition-colors"
            onClick={() => {
              setIsOpen((prev) => !prev)
              setMobileServicesOpen(false)
            }}
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[2px] bg-foreground rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-background overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[600px] border-t border-border duration-500 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pt-4 pb-6 flex flex-col">

            <MobileNavLink href="/#home" onClose={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/#about" onClose={() => setIsOpen(false)}>About</MobileNavLink>

            {/* Services Accordion */}
            <div className="border-b border-border/40">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="flex items-center justify-between w-full text-foreground hover:text-primary py-3.5 font-bold transition-colors"
              >
                <span>Services</span>
                <div className={`w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 ${
                  mobileServicesOpen ? "rotate-180 bg-primary/20" : ""
                }`}>
                  <ChevronDown className="w-4 h-4 text-primary" />
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileServicesOpen ? "max-h-60 opacity-100 mb-3" : "max-h-0 opacity-0"
              }`}>
                <div className="flex flex-col rounded-xl overflow-hidden border border-border/60">
                  {Services.map((service, i) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`flex items-center justify-between px-4 py-3.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 active:bg-primary/10 transition-colors ${
                        i !== Services.length - 1 ? "border-b border-border/40" : ""
                      }`}
                      onClick={() => {
                        setMobileServicesOpen(false)
                        setIsOpen(false)
                      }}
                    >
                      {service.name}
                      <ChevronDown className="w-3.5 h-3.5 text-primary/50 -rotate-90" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <MobileNavLink href="/#experience" onClose={() => setIsOpen(false)}>Experience</MobileNavLink>
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
                  className="block py-3.5 text-foreground hover:text-primary transition-colors font-bold border-b border-border/40"
                  onClick={() => setIsOpen(false)}
                >
                  Logout
                </Link>
              ) : (
                <MobileNavLink href="/login" onClose={() => setIsOpen(false)}>Login</MobileNavLink>
              )
            )}

            {/* Bottom CTAs */}
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/contact"
                className="block bg-primary text-primary-foreground px-4 py-3.5 rounded-xl text-center font-semibold hover:bg-primary/90 active:scale-[0.98] transition-all duration-150"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              {!loading && !isLoggedIn && (
                <Link
                  href="/login"
                  className="block border border-primary/30 text-primary px-4 py-3.5 rounded-xl text-center font-semibold hover:bg-primary/5 active:scale-[0.98] transition-all duration-150"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* Backdrop — dims page content behind open menu */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[73px] bg-black/30 z-40 md:hidden backdrop-blur-[1px] transition-opacity duration-300"
          onClick={() => {
            setIsOpen(false)
            setMobileServicesOpen(false)
          }}
        />
      )}
    </>
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
      className="block py-3.5 text-foreground hover:text-primary active:text-primary transition-colors font-bold border-b border-border/40"
      onClick={onClose}
    >
      {children}
    </Link>
  )
}