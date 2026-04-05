"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export default function Hero() {
  const { isLoggedIn, loading } = useAuth() // ← add loading

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-70">
        <img
          src="/african-construction-site-with-solar-panels-and-en.jpg"
          alt="Engineering Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Building Sustainable{" "}
          <span className="text-primary">Engineering Solutions</span>
        </h1>

        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed  text-black">
          Experts in Biogas Construction, Civil Works, Electrical Installations,
          Solar Integration & Telecom Networks. Delivering excellence in every project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href={!loading && isLoggedIn ? "/quote" : "/login?returnTo=/quote"} // ← wait for loading
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
          >
            Get a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors font-medium text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}