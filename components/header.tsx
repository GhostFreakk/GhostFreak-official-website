"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-8 h-8 group-hover:scale-105 transition-transform">
              <Image src="/images/ghostfreak-logo.png" alt="GhostFreak Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold titanium-gradient">GhostFreak</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-gray-300 hover:text-white">
              <Link href="https://github.com/GhostFreakOS" target="_blank">
                GitHub
              </Link>
            </Button>
            <Button asChild className="bg-white text-black hover:bg-gray-200 transition-colors">
              <Link href="/projects">Explore Projects</Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Link href="/projects" className="block text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/docs" className="block text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
            <div className="pt-4 space-y-2">
              <Button asChild variant="ghost" className="w-full text-gray-300 hover:text-white">
                <Link href="https://github.com/GhostFreakOS" target="_blank">
                  GitHub
                </Link>
              </Button>
              <Button asChild className="w-full bg-white text-black hover:bg-gray-200">
                <Link href="/projects">Explore Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
