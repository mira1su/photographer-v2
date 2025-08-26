import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Alex Chen Photography | Professional Photographer Portfolio",
  description:
    "Elegant minimalist photography portfolio showcasing visual artistry through portrait, landscape, and commercial photography. Based in New York City.",
  keywords: [
    "photography",
    "photographer",
    "portfolio",
    "New York",
    "portrait",
    "landscape",
    "commercial",
    "visual storytelling",
  ],
  authors: [{ name: "Alex Chen" }],
  creator: "Alex Chen",
  openGraph: {
    title: "Alex Chen Photography | Professional Photographer Portfolio",
    description:
      "Elegant minimalist photography portfolio showcasing visual artistry through portrait, landscape, and commercial photography.",
    type: "website",
    locale: "en_US",
    siteName: "Alex Chen Photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen Photography | Professional Photographer Portfolio",
    description:
      "Elegant minimalist photography portfolio showcasing visual artistry through portrait, landscape, and commercial photography.",
  },
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
