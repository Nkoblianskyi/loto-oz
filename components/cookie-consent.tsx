"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <div className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Cookie Consent</h3>
              <p className="text-sm text-gray-600 mb-4">
                We use cookies to enhance your experience on our website. By continuing to use our site, you agree to
                our use of cookies. You can learn more about our cookie policy{" "}
                <Link href="/cookies" className="text-blue-600 hover:underline">
                  here
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button onClick={acceptCookies} className="bg-green-600 hover:bg-green-700">
                  Accept All Cookies
                </Button>
                <Button onClick={declineCookies} variant="outline">
                  Decline
                </Button>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={declineCookies} className="text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
