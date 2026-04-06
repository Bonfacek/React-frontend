"use client"

import { useEffect } from "react"
import { getToken, removeToken } from "@/lib/auth"

export default function Logout() {

  useEffect(() => {
    const performLogout = async () => {
      const token = getToken()

      if (token) {
        try {
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/userapi/logout`, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
        } catch {}
      }

      removeToken()
      localStorage.removeItem("refreshToken")

      // Redirect to login
      window.location.href = "/login"
    }

    performLogout()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Signing out...</p>
    </div>
  )
}