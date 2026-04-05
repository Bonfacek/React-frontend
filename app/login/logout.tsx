"use client"

import { useAuth } from "@/contexts/AuthContext"
import { useEffect } from "react"

export default function Logout() {
  const { logout } = useAuth()

  useEffect(() => {
    logout()
  }, [logout])

  return null
}