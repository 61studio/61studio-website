"use client"

import { useState } from "react"
import Image from "next/image"

const entries = [
  {
    id: 1,
    title: "On Film and Memory",
    excerpt: "Why I still shoot on 16mm, and what the grain teaches us about impermanence.",
    date: "March 2024",
    // Old camera/film equipment - vintage, tactile
    image: "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?w=800&q=80",
  },
  {
    id: 2,
    title: "Auckland in Winter",
    excerpt: "Finding beauty in the grey. The city becomes a different place when the sky closes in.",
    date: "July 2024",
    // Overcast city/street - moody, quiet
    image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80",
  },
  {
    id: 3,
    title: "The Art of Waiting",
    excerpt: "Documentary filmmaking is mostly patience. The camera learns to see what we miss.",
    date: "January 2024",
    // Window light, contemplative scene
    image: "https://images.unsplash.com/photo-1517495306984-f84210f9daa8?w=800&q=80",
  },
]

export function Journal() {
  const [hoveredEntry, setHoveredEntry] = useState<number | null>(null)

  return (
    <section id="journal" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 md:mb-28">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Thoughts & Process
          </p>
          <h2 className="font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl lg:text-6xl">
            Journal
          </h2>
        </div>

        {/* Journal Entries */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {entries.map((entry) => (
            <a
              key={entry.id}
              href="#"
              className="group"
              onMouseEnter={() => setHoveredEntry(entry.id)}
              onMouseLeave={() => setHoveredEntry(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredEntry === entry.id ? "scale-[1.02]" : "scale-100"
                  }`}
                  style={{
                    filter: hoveredEntry === entry.id 
                      ? 'contrast(1.05) saturate(0.8) sepia(0.05)'
                      : 'contrast(1.02) saturate(0.55) sepia(0.12)',
                  }}
                />
                {/* Kodak grade */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,245,230,0.05) 0%, transparent 40%, rgba(35,60,75,0.12) 100%)',
                    mixBlendMode: 'soft-light',
                  }}
                />
                <div className="absolute inset-0 bg-background/25" />
                <div 
                  className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.25)_100%)]" />
              </div>

              {/* Content */}
              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {entry.date}
                </p>
                <h3 className="mt-2 font-serif text-xl font-light text-foreground transition-colors group-hover:text-accent md:text-2xl">
                  {entry.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {entry.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>Read All Entries</span>
            <span className="h-px w-8 bg-current" />
          </a>
        </div>
      </div>
    </section>
  )
}
