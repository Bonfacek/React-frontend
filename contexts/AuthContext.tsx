'use client'

import {createContext, useContext, useEffect, useState, ReactNode } from "react"
import {getToken, setToken, removeToken, isAuthenticated, getUsername } from "@/lib/auth"

type AuthContextType = {
  isLoggedIn: boolean
  username: string | null
  loading: boolean
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState<string | null>(null)
  const [loading, setLoading] = useState(true) // true until we've checked localStorage

  useEffect(() => {
    // Check auth state on mount
    if (isAuthenticated()) {
      setIsLoggedIn(true)
      setUsername(getUsername())
    } else {
      setIsLoggedIn(false)
      setUsername(null)
    }
    setLoading(false)
  }, [])

  const login = (token: string) => {
    setToken(token)
    setIsLoggedIn(true)
    setUsername(getUsername())
  }

  const logout = async () => {
    const token = getToken()
    // Call backend logout to blacklist token in Redis
    if (token) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/userapi/logout`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        })
      } catch {
        // Proceed with local logout even if backend call fails
      }
    }
    removeToken()
    setIsLoggedIn(false)
    setUsername(null)
    window.location.href = "/login"
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used inside <AuthProvider>")
  return context
}
