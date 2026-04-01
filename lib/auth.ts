const TOKEN_KEY = "token"

export function getToken(): string | null {
  if (typeof window === "undefined") return null // SSR safe
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token)
}

export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY)
}

export function isAuthenticated(): boolean {
  const token = getToken()
  if (!token) return false

  try {
    // Decode JWT payload (no verification — just check expiry)
    const payload = JSON.parse(atob(token.split(".")[1]))
    const isExpired = payload.exp * 1000 < Date.now()
    if (isExpired) {
      removeToken() // clean up expired token
      return false
    }
    return true
  } catch {
    removeToken() // malformed token
    return false
  }
}

export function getUsername(): string | null {
  const token = getToken()
  if (!token) return null
  try {
    const payload = JSON.parse(atob(token.split(".")[1]))
    return payload.sub ?? null // "sub" is the email in your JWT
  } catch {
    return null
  }
}

export function logout(): void {
  removeToken()
  window.location.href = "/login"
}