"use client"

import { useState } from "react"
import Image from "next/image"

const stories = [
  {
    id: 1,
    title: "Rainy Season",
    description: "The city dissolves in grey. People move like ghosts between awnings.",
    // Rainy street scene - umbrellas, wet pavement, neon reflections
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800&q=80",
    category: "Documentary",
  },
  {
    id: 2,
    title: "The Fisherman",
    description: "Solitude at the edge of the Pacific. A portrait of patience.",
    // Person by the sea - contemplative, quiet
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    category: "Portrait",
  },
  {
    id: 3,
    title: "Late Night Noodles",
    description: "Steam rises. Stories unfold between strangers at 2am.",
    // Intimate restaurant/food scene - warm light, atmospheric
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80",
    category: "Urban",
  },
]

export function Stories() {
  const [hoveredStory, setHoveredStory] = useState<number | null>(null)

  return (
    <section id="stories" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 md:mb-28">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Visual Narratives
          </p>
          <h2 className="font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl lg:text-6xl">
            Stories
          </h2>
        </div>

        {/* Stories Grid - Asymmetric Layout */}
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          {/* Large Story */}
          <a
            href="#"
            className="group relative aspect-[3/4] overflow-hidden md:col-span-7"
            onMouseEnter={() => setHoveredStory(stories[0].id)}
            onMouseLeave={() => setHoveredStory(null)}
          >
            <Image
              src={stories[0].image}
              alt={stories[0].title}
              fill
              className={`object-cover transition-all duration-700 ${
                hoveredStory === stories[0].id ? "scale-[1.02]" : "scale-100"
              }`}
              style={{
                filter: hoveredStory === stories[0].id 
                  ? 'contrast(1.05) saturate(0.8) sepia(0.05)'
                  : 'contrast(1.02) saturate(0.6) sepia(0.1)',
              }}
            />
            {/* Kodak grade */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255,245,230,0.05) 0%, transparent 40%, rgba(35,60,75,0.15) 100%)',
                mixBlendMode: 'soft-light',
              }}
            />
            <div className="absolute inset-0 bg-background/45" />
            <div 
              className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-primary/50">
                {stories[0].category}
              </p>
              <h3 className="font-serif text-3xl font-light text-primary md:text-4xl">
                {stories[0].title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary/60">
                {stories[0].description}
              </p>
            </div>
          </a>

          {/* Smaller Stories */}
          <div className="flex flex-col gap-6 md:col-span-5 md:gap-8">
            {stories.slice(1).map((story) => (
              <a
                key={story.id}
                href="#"
                className="group relative aspect-[4/3] overflow-hidden"
                onMouseEnter={() => setHoveredStory(story.id)}
                onMouseLeave={() => setHoveredStory(null)}
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredStory === story.id ? "scale-[1.02]" : "scale-100"
                  }`}
                  style={{
                    filter: hoveredStory === story.id 
                      ? 'contrast(1.05) saturate(0.8) sepia(0.05)'
                      : 'contrast(1.02) saturate(0.6) sepia(0.1)',
                  }}
                />
                {/* Kodak grade */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,245,230,0.05) 0%, transparent 40%, rgba(35,60,75,0.15) 100%)',
                    mixBlendMode: 'soft-light',
                  }}
                />
                <div className="absolute inset-0 bg-background/45" />
                <div 
                  className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-primary/50">
                    {story.category}
                  </p>
                  <h3 className="font-serif text-xl font-light text-primary md:text-2xl">
                    {story.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
