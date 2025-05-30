"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function AnimatedLogo() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      // Apply 3D rotation effect
      container.style.transform = `
        perspective(1000px)
        rotateY(${x * 20}deg)
        rotateX(${-y * 20}deg)
        scale3d(1.05, 1.05, 1.05)
      `
    }

    const handleMouseLeave = () => {
      // Reset to original position with animation
      container.style.transition = "transform 0.5s ease"
      container.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)"
    }

    const handleMouseEnter = () => {
      // Remove transition when entering for smooth movement
      container.style.transition = "none"
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)
    container.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
      container.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center cursor-pointer animate-float"
      style={{ transformStyle: "preserve-3d", transition: "transform 0.5s ease" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
      <div className="relative w-64 h-64 animate-bounce-slow">
        <Image
          src="/images/oz-lotto-logo.png"
          alt="OZ Lotto"
          fill
          className="object-contain"
          style={{ transform: "translateZ(50px)" }}
        />
      </div>
      <div className="absolute inset-0 border-4 border-white/30 rounded-full animate-pulse-glow"></div>
    </div>
  )
}
