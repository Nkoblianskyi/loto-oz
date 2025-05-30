import type React from "react"
import type { Metadata } from "next"
import { Tinos } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import { Toaster } from "@/components/ui/toaster"

const inter = Tinos({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "OZ Lotto - Australia's Ultimate Jackpot Adventure",
  description: "Join thousands of winners and start your lottery journey today with OZ Lotto",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CookieConsent />
        <Toaster />
      </body>
    </html>
  )
}
