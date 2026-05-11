"use client"

import { useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"

const instagramPosts = [
  {
    id: 1,
    // Misty harbour morning
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    alt: "Harbour at dawn",
  },
  {
    id: 2,
    // Rainy window
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400&q=80",
    alt: "Rain on window",
  },
  {
    id: 3,
    // Street at night - neon, wet pavement
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=400&q=80",
    alt: "Night street",
  },
  {
    id: 4,
    // Coastal landscape - moody
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&q=80",
    alt: "Coastal scene",
  },
  {
    id: 5,
    // Interior light through curtains
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80",
    alt: "Light through curtains",
  },
  {
    id: 6,
    // Person silhouette - contemplative
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    alt: "Silhouette",
  },
]

export function InstagramFeed() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  return (
    <section id="instagram" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Follow Along
          </p>
          <h2 className="font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl">
            @61studio
          </h2>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 gap-1.5 md:grid-cols-3 md:gap-2">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className={`object-cover transition-all duration-700 ${
                  hoveredPost === post.id ? "scale-[1.05]" : "scale-100"
                }`}
                style={{
                  filter: hoveredPost === post.id 
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
              {/* Film grain */}
              <div 
                className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-background/50 transition-opacity duration-300 ${
                  hoveredPost === post.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <Instagram className="h-6 w-6 text-primary/80" />
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="mt-14 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-border/60 px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-foreground transition-all hover:border-foreground/50 hover:bg-foreground hover:text-background"
          >
            <Instagram className="h-3.5 w-3.5" />
            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}
