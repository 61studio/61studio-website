"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
const navLinks = [
    { label: "WORK", href: "#films" },
    { label: "ABOUT", href: "#about" },
    { label: "ARCHIVE", href: "#instagram" },
    { label: "INQUIRE", href: "#contact" },
  ]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-12">
          {/* Logo - smaller, more subtle */}
          <a href="#" className="relative block">
            <Image
              src="/logo.png"
              alt="61 Films"
              width={100}
              height={40}
              className={`h-6 w-auto brightness-0 invert transition-opacity duration-700 md:h-7 ${
                isScrolled ? "opacity-90" : "opacity-40"
              }`}
              priority
            />
          </a>

          {/* Desktop Navigation - smaller, wider spacing */}
          <div className="hidden items-center gap-12 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[9px] uppercase tracking-[0.35em] transition-all duration-500 hover:text-white/80 ${
                  isScrolled ? "text-white/50" : "text-white/45"
                }`}
              
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex h-8 w-8 items-center justify-center md:hidden"
            aria-label="Open menu"
          >
            <Menu className={`h-4 w-4 transition-all duration-700 ${
              isScrolled ? "text-primary/70" : "text-primary/40"
            }`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="#" className="relative block">
              <Image
                src="/logo.png"
                alt="61 Films"
                width={120}
                height={48}
                className="h-5 w-auto brightness-0 invert opacity-50"
              />
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-primary" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-16">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-2xl font-light tracking-[0.5em] text-primary/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
