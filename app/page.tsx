
import { Hero } from "@/components/hero"
import { FeaturedFilms } from "@/components/featured-films"
import { Navigation } from "@/components/navigation"


import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedFilms />
     
     
      
    
      <Contact />
     
    </main>
  )
}
