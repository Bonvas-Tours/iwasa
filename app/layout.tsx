import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "IWaS Abroad - Your Gateway to Global Opportunities",
    template: "%s | IWaS Abroad",
  },
  description:
    "Transform your career through international internships, work placements, and study abroad programs. A Bonvas Tours initiative connecting you to opportunities in 50+ countries.",
  keywords: [
    "international internships",
    "study abroad",
    "work placements",
    "global opportunities",
    "career development",
    "international experience",
    "Bonvas Tours",
    "IWaS Abroad",
  ],
  authors: [{ name: "IWaS Abroad Team" }],
  creator: "IWaS Abroad",
  publisher: "Bonvas Tours Limited",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iwasabroad.com",
    siteName: "IWaS Abroad",
    title: "IWaS Abroad - Your Gateway to Global Opportunities",
    description: "Transform your career through international internships, work placements, and study abroad programs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IWaS Abroad - Global Opportunities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IWaS Abroad - Your Gateway to Global Opportunities",
    description: "Transform your career through international internships, work placements, and study abroad programs.",
    images: ["/og-image.jpg"],
    creator: "@iwasabroad",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
