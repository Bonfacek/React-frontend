import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Jawatech Engineering - Construction & Engineering Solutions",
    template: "%s | Jawatech Engineering",
  },
  description:
    "Expert construction and engineering services including Biogas Construction, Civil Engineering, Electrical Engineering, and Telecommunications Networks.",
  keywords: ["engineering", "construction", "biogas", "civil engineering", "electrical engineering", "telecommunications",
    "networking", "infrastructure", "project management", "sustainable solutions", "renewable energy", "jawatech", "jawatech engineering", "jawatech construction", "jawatech biogas", "jawatech civil engineering", "jawatech electrical engineering", "jawatech telecommunications",
    "jawatech networking", "jawatech infrastructure", "jawatech project management", "jawatech sustainable solutions", "jawatech renewable energy",
    "construction company", "engineering firm", "biogas construction", "civil engineering services", "electrical engineering solutions", "telecommunications networks", "network infrastructure", "sustainable construction", "renewable energy projects"
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "Jawatech",
  creator: "Jawatech Engineering",
  publisher: "Jawatech Engineering",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: "Jawatech Engineering - Construction & Engineering Solutions",
      template: "%s | Jawatech Engineering",
    },
    description:
      "Expert construction and engineering services including Biogas Construction, Civil Engineering, Electrical Engineering, and Telecommunications Networks.",
    url: "https://jawatech.com", //will repace with domain
    siteName: "Jawatech Engineering",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/ico.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Jawatech Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawatech Engineering - Construction & Engineering Solutions",
    description:
      "Expert construction and engineering services including Biogas Construction, Civil Engineering, Electrical Engineering, and Telecommunications Networks.",
    images: ["/bridge.jpg"], // Add your Twitter image
    creator: "@jawatech", // Replace with your Twitter handle
    site: "@jawatech", // Replace with your Twitter handle
  },
  category: "technology",
  classification: "web application",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/icon.jpg",
        sizes: "any",
      },
      {
        url: "/icon.jpg",
        type: "image/jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark.jpg", 
        type: "image/jpeg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/apple-icon.jpg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
    shortcut: ["/shortcut-icon.jpg"],
  },
  metadataBase: new URL("https://jawatech.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  authors: [
    {
      name: "Jawatech Engineering",
      url: "https://jawatech.com",
    },
  ],
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
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
