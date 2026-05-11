"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import Image from "next/image"

const films = [
  {
    id: 1,
    title: "The Last Light",
    location: "Waitemata Harbour",
    year: "2024",
    // Moody harbour at dusk - quiet, contemplative
    thumbnail:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80",
    videoUrl: "#",
  },
  {
    id: 2,
    title: "Silent Roads",
    location: "Coromandel",
    year: "2024",
    // Misty coastal road - windy, overcast feel
    thumbnail:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    videoUrl: "#",
  },
  {
    id: 3,
    title: "Morning Rituals",
    location: "Ponsonby",
    year: "2023",
    // Quiet interior light - window, curtains, soft morning
    thumbnail:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    videoUrl: "#",
  },
  {
    id: 4,
    title: "Between Tides",
    location: "Piha",
    year: "2023",
    // Dramatic black sand beach - moody, powerful
    thumbnail:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
    videoUrl: "#",
  },
]

export function FeaturedFilms() {
  const [hoveredFilm, setHoveredFilm] = useState<number | null>(null)

  return (
    <section id="films" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 md:mb-28">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Selected Works
          </p>
          <h2 className="font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl lg:text-6xl">
            Films
          </h2>
        </div>

        {/* Films Grid */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {films.map((film, index) => (
            <a
              key={film.id}
              href={film.videoUrl}
              className="group relative aspect-[4/3] overflow-hidden"
              onMouseEnter={() => setHoveredFilm(film.id)}
              onMouseLeave={() => setHoveredFilm(null)}
            >
              {/* Thumbnail with Kodak 2383 grade */}
              <Image
                src={film.thumbnail}
                alt={`${film.title} film`}
                fill
                className={`object-cover transition-all duration-700 ${
                  hoveredFilm === film.id ? "scale-[1.03]" : "scale-100"
                }`}
                style={{
                  filter: hoveredFilm === film.id 
                    ? 'contrast(1.05) saturate(0.8) sepia(0.05)'
                    : 'contrast(1.02) saturate(0.65) sepia(0.08)',
                }}
              />

              {/* Kodak color grade overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,245,230,0.05) 0%, transparent 40%, rgba(35,60,75,0.12) 100%)',
                  mixBlendMode: 'soft-light',
                }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-background/55 transition-opacity duration-500 ${
                  hoveredFilm === film.id ? "opacity-40" : "opacity-50"
                }`}
              />

              {/* Film grain effect - fine, subtle */}
              <div 
                className="absolute inset-0 opacity-[0.25] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.35)_100%)]" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                {/* Play Button */}
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 transition-all duration-500 ${
                    hoveredFilm === film.id
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-0"
                  }`}
                >
                  <Play className="ml-0.5 h-4 w-4 text-primary/90" />
                </div>

                {/* Film Info */}
                <h3 className="font-serif text-2xl font-light tracking-wide text-primary md:text-3xl">
                  {film.title}
                </h3>
                <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-primary/50">
                  {film.location} / {film.year}
                </p>
              </div>

              {/* Index Number */}
              <div className="absolute bottom-5 left-5">
                <span className="font-serif text-4xl font-light text-primary/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
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
            <span>View All Films</span>
            <span className="h-px w-8 bg-current" />
          </a>
        </div>
      </div>
    </section>
  )
}
