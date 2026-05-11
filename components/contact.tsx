"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Contact
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight tracking-wide text-foreground md:text-5xl">
              Let&apos;s create
              <br />
              <span className="text-muted-foreground">something together</span>
            </h2>

            <p className="mt-10 text-sm leading-[1.8] text-muted-foreground md:text-base">
              We work with those who value intention over spectacle. If you have 
              a story that needs telling — or simply want to talk about film — 
              we&apos;d like to hear from you.
            </p>

            <div className="mt-14 space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:hello@61studio.co.nz"
                  className="mt-2 block font-serif text-lg text-foreground transition-colors hover:text-accent"
                >
                  hello@61studio.co.nz
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Based In
                </p>
                <p className="mt-2 font-serif text-lg text-foreground">
                  Auckland, New Zealand
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Available For
                </p>
                <p className="mt-2 font-serif text-lg text-foreground">
                  Short Films / Documentary / Music Videos
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-accent"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-accent"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="subject" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-accent"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-[150px] border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-accent"
                />
              </div>

              <Button
                type="submit"
                className="w-full border border-border/60 bg-transparent py-6 text-[10px] uppercase tracking-[0.2em] text-foreground transition-all hover:border-foreground/50 hover:bg-foreground hover:text-background"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
