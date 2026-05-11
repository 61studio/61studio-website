"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const heroImages = [
    "/hero-bg.jpg",
    "/hero-1.jpg",
    "/hero-2.jpg",
    "/hero-3.jpg",
    "/hero-4.jpg",
    "/hero-5.jpg",
    "/hero-6.jpg",
  ]
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }, 5000)

  return () => clearInterval(interval)
}, [])

useEffect(() => {
  const timer = setTimeout(() => setIsLoaded(true), 100)
  return () => clearTimeout(timer)
}, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Container - with push in animation */}
      <div className={`absolute inset-0 ${isLoaded ? 'cinematic-push-in' : ''}`}>
      {heroImages.map((image, index) => (
  <Image
    key={image}
    src={image}
    alt="Street scene"
    fill
    priority={index === 0}
    className={`object-cover transition-opacity duration-[1800ms] ease-in-out ${
      index === currentImage ? "opacity-100" : "opacity-0"
    }`}
    style={{
      filter: "brightness(0.82) contrast(1.08) saturate(0.7) sepia(0.1)",
    }}
  />
))}
      </div>

      {/* Kodak 2383 Color Grade Overlay - warm highlights, cyan shadows */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,248,235,0.06) 0%, transparent 35%, rgba(35,55,70,0.15) 100%)',
          mixBlendMode: 'soft-light',
        }}
      />

      {/* Dark overlay with subtle breathing */}
      <div className="absolute inset-0 bg-background/30 film-breathe" />

      {/* Fine grain texture - subtle flicker */}
      <div 
        className="absolute inset-0 mix-blend-overlay grain-flicker"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette - stronger for cinematic feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content - Logo centered, positioned above center like film title credits */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-32 md:pb-40">
        {/* Logo - small, ethereal, like opening credits */}
        <Image
          src="/logo.png"
          alt="61 Films - Cinematic Stories"
          width={180}
          height={72}
          className="h-auto w-28 brightness-0 invert opacity-20 md:w-32 lg:w-36"
          priority
        />
<p className="mt-4 text-[6px] uppercase tracking-[0.55em] text-white/20">
  Films from Auckland & somewhere in memory.
</p>
        {/* Scroll indicator - extremely subtle */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 md:bottom-20">
          <div className="flex flex-col items-center gap-4">
            <span className="text-[8px] uppercase tracking-[0.5em] text-primary/15">
              Scroll
            </span>
            <div className="h-6 w-px bg-primary/8" />
          </div>
        </div>
      </div>
    </section>
  )
}
