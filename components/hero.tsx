"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full opacity-20 animate-float" />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full opacity-30 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 animate-float">
              <Image
                src="/images/ghostfreak-logo.png"
                alt="GhostFreak Logo"
                fill
                className="object-contain opacity-80"
              />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block titanium-gradient">Open Source</span>
            <span className="block metallic-gradient">Innovation</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            GhostFreak is an early-stage open source organization creating innovative tools for developers. We're
            building the future of Linux distributions and developer environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/projects">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-900 hover:text-white transition-all duration-300 px-8 py-4 text-lg"
            >
              <Link href="https://github.com/GhostFreakOS" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
          </div>

          {/* Project Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300">
              <h3 className="text-xl font-bold metallic-gradient mb-2">GhostFreakOS</h3>
              <p className="text-gray-400 text-sm mb-4">
                A sleek, modern Linux distribution based on Arch Linux. Coming soon.
              </p>
              <Button asChild variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                <Link href="/projects/ghostfreakos">Learn More →</Link>
              </Button>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300">
              <h3 className="text-xl font-bold metallic-gradient mb-2">ZenShell</h3>
              <p className="text-gray-400 text-sm mb-4">
                A minimalist, developer-centric shell built exclusively for GhostFreakOS.
              </p>
              <Button asChild variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                <Link href="/projects/zenshell">Learn More →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
