import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Image - Person with camera, contemplative, not posed */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80"
              alt="Filmmaker portrait"
              fill
              className="object-cover"
              style={{
                filter: 'contrast(1.02) saturate(0.6) sepia(0.1)',
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
            {/* Film grain effect */}
            <div 
              className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              About
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight tracking-wide text-foreground md:text-5xl">
              Visual stories
              <br />
              <span className="text-muted-foreground">from memory</span>
            </h2>

            <div className="mt-10 space-y-6 text-sm leading-[1.8] text-muted-foreground md:text-base">
              <p>
                61STUDIO is an independent film collective based in Auckland, 
                where the Pacific meets the city. We create cinematic visual 
                stories that live somewhere between documentary and poetry.
              </p>
              <p>
                Our work is shaped by overcast skies and coastal light, by 
                Wong Kar-wai&apos;s Hong Kong and the quiet of New Zealand 
                harbours. We shoot on film when we can, digital when we must 
                — always searching for the grain of real life.
              </p>
              <p>
                We believe cinema is about what remains after the frame ends. 
                The feeling of wind. The weight of silence. The way light 
                falls on a face you&apos;ll never see again.
              </p>
            </div>

            {/* Stats - more understated */}
            <div className="mt-14 grid grid-cols-3 gap-8 border-t border-border/50 pt-8">
              <div>
                <p className="font-serif text-2xl font-light text-foreground md:text-3xl">
                  50+
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Films
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-light text-foreground md:text-3xl">
                  8
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Years
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-light text-foreground md:text-3xl">
                  12
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Awards
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-14">
              <a
                href="#contact"
                className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-foreground transition-colors hover:text-accent"
              >
                <span>Get in Touch</span>
                <span className="h-px w-8 bg-current" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
