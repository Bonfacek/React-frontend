"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useAuth } from "@/contexts/AuthContext"

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [socialLoading, setSocialLoading] = useState<string | null>(null)
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("http://localhost:8080/userapi/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (data.success) {
        login(data.message)
        const returnTo = new URLSearchParams(window.location.search).get("returnTo")
        window.location.href = returnTo || "/"
      } else {
        setError(data.message || "Login failed")
      }
    } catch (err) {
      setError("Could not connect to server")
    } finally {
      setLoading(false)
    }
  }

  const handleSocialLogin = (provider: string) => {
    setSocialLoading(provider)
    localStorage.setItem(
      "oauth2ReturnTo",
      new URLSearchParams(window.location.search).get("returnTo") || "/"
    )
    window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary/10 to-accent/80">
        <div className="border-border rounded-lg w-full p-12 px-8 max-w-md animate-fade-in-up">

          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Login to Your Account
          </h2>

          {/* Google Login Button */}
          <div className="mb-6">
            <button
              onClick={() => handleSocialLogin("google")}
              disabled={!!socialLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-border rounded-lg hover:bg-muted/50 transition-colors text-sm font-medium disabled:opacity-50"
            >
              <GoogleIcon />
              {socialLoading === "google" ? "Redirecting..." : "Continue with Google"}
            </button>
          </div>
              <div className="relative mb-6">
              <div className="flex justify-center">
                <span className="text-xs text-blue-500 dark:text-blue-400 italic tracking-wider">
                  or continue with email
                </span>
              </div>
            </div>

          {/* Email Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-sm text-muted-foreground mt-4 text-center font-bold">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:text-primary/80 font-medium">
              Sign up
            </Link>
          </p>

        </div>
      </div>
      <Footer />
    </main>
  )
}