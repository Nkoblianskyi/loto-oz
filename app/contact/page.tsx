"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to login page immediately
    router.push("/login")
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center">
      <div className="text-white text-center">
        <p className="text-lg">Redirecting to login...</p>
      </div>
    </div>
  )
}
