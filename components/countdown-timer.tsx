"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [drawNumber, setDrawNumber] = useState(30891)
  const [drawDate, setDrawDate] = useState("")

  useEffect(() => {
    const getNextWednesday = () => {
      const now = new Date()
      const nextWednesday = new Date()
      const daysUntilWednesday = (3 - now.getDay() + 7) % 7 || 7
      nextWednesday.setDate(now.getDate() + daysUntilWednesday)
      nextWednesday.setHours(20, 30, 0, 0) // 8:30 PM draw time
      return nextWednesday
    }

    const updateCountdown = () => {
      const now = new Date()
      const nextDraw = getNextWednesday()

      if (now > nextDraw) {
        nextDraw.setDate(nextDraw.getDate() + 7)
        setDrawNumber((prev) => prev + 1)
      }

      const difference = nextDraw.getTime() - now.getTime()

      setDrawDate(
        nextDraw.toLocaleDateString("en-AU", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      )

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="bg-gradient-to-r from-blue-900 to-red-800 text-white p-6 rounded-2xl shadow-2xl border-2 border-white/20 hover:scale-105 transition-transform duration-300 animate-float">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-white">
          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          <span className="text-lg font-bold animate-pulse">🇦🇺 NEXT DRAW</span>
          <div className="w-2 h-2 bg-white rounded-full animate-ping animation-delay-500"></div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Days", value: timeLeft.days.toString().padStart(2, "0") },
            { label: "Hours", value: timeLeft.hours.toString().padStart(2, "0") },
            { label: "Minutes", value: timeLeft.minutes.toString().padStart(2, "0") },
            { label: "Seconds", value: timeLeft.seconds.toString().padStart(2, "0") },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white text-blue-900 rounded-xl p-3 border-2 border-red-200 hover:scale-110 transition-transform duration-200 animate-bounce-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl font-bold animate-number-flip">{item.value}</div>
              <div className="text-xs text-red-600 font-semibold">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-1 animate-fade-in-up animation-delay-400">
          <div className="text-white font-bold animate-pulse-glow">DRAW #{drawNumber}</div>
          <div className="text-sm text-white/90">({drawDate})</div>
        </div>
      </div>
    </Card>
  )
}
