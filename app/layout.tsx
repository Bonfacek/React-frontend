import type React from "react"
import type { Metadata, Viewport } from "next"
import { Bebas_Neue, Nunito_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { AuthProvider } from "@/contexts/AuthContext"

// Load Google Fonts
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: {
    default: "Jawatech Engineering - Construction & Engineering Solutions",
    template: "%s | Jawatech Engineering",
  },
  description:
    "Expert construction and engineering services including Biogas Construction, Civil Engineering, Electrical Engineering, and Telecommunications Networks.",
  keywords: ["engineering", "construction", "biogas", "civil engineering",
    "electrical engineering", "telecommunications", "networking",
    "infrastructure", "project management", "sustainable solutions",
    "renewable energy", "jawatech"],
  formatDetection: { email: false, address: false, telephone: false },
  generator: "Jawatech",
  creator: "Jawatech Engineering",
  publisher: "Jawatech Engineering",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: {
      default: "Jawatech Engineering - Construction & Engineering Solutions",
      template: "%s | Jawatech Engineering",
    },
    description:
      "Expert construction and engineering services including Biogas Construction, Civil Engineering, Electrical Engineering, and Telecommunications Networks.",
    url: "https://jawatech.com",
    siteName: "Jawatech Engineering",
    locale: "en_US",
    type: "website",
    images: [{ url: "/ico.jpg", width: 1200, height: 630, alt: "Jawatech Engineering" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawatech Engineering - Construction & Engineering Solutions",
    description:
      "Expert construction and engineering services including Biogas Construction, Civil Engineering, Electrical Engineering, and Telecommunications Networks.",
    images: ["/bridge.jpg"],
    creator: "@jawatech",
    site: "@jawatech",
  },
  category: "technology",
  classification: "web application",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.jpg", sizes: "any" },
      { url: "/icon.jpg", type: "image/jpeg", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.jpg", type: "image/jpeg", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [{ url: "/apple-icon.jpg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: ["/shortcut-icon.jpg"],
  },
  metadataBase: new URL("https://jawatech.com"),
  alternates: { canonical: "/" },
  authors: [{ name: "Jawatech Engineering", url: "https://jawatech.com" }],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${bebasNeue.variable} ${nunitoSans.variable}`}
    >
      <body className="font-body antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}