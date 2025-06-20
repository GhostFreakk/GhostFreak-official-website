"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Bell } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function EnhancedHero() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<null | "success" | "error">(null)
  const [loading, setLoading] = useState(false)

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const response = await fetch("https://formspree.io/f/mldnwjbp", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Elements with better positioning */}
      <div className="absolute top-32 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Logo with glow effect - now properly centered */}
          <div className="flex justify-center mb-12 mt-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-500" />
              <div className="relative w-32 h-32 p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-float group-hover:scale-110 transition-transform duration-300">
                <Image src="/images/ghostfreak-logo.png" alt="GhostFreak Logo" fill className="object-contain p-3" />
              </div>
            </div>
          </div>

          {/* Enhanced Typography */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              <span className="block titanium-gradient bg-clip-text text-transparent animate-pulse">Open Source</span>
              <span className="block metallic-gradient bg-clip-text text-transparent">Innovation</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-6" />
          </div>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            GhostFreak is an early-stage open source organization creating innovative tools for developers.
            <span className="text-white font-medium"> We're building the future</span> of Linux distributions and
            developer environments.
          </p>

          {/* Enhanced CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl px-10 py-5 text-lg font-semibold rounded-full"
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
              className="border-2 border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/50 transition-all duration-300 px-10 py-5 text-lg rounded-full backdrop-blur-sm"
            >
              <Link href="https://github.com/GhostFreakOS" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
          </div>

          {/* Release Notifications */}
          <div className="max-w-md mx-auto mb-12" id="early-access">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-center mb-3">
                <Bell className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-sm font-medium text-yellow-400">Release Notifications</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Get notified when GhostFreakOS is available for download</p>
              <form onSubmit={handleNotify} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors"
                  required
                />
                <Button size="sm" className="bg-white text-black hover:bg-gray-200 px-6" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Notify Me"}
                </Button>
              </form>
              {status === "success" && (
                <div className="mt-2 text-green-400 text-sm">Thank you! You'll be notified.</div>
              )}
              {status === "error" && (
                <div className="mt-2 text-red-400 text-sm">Something went wrong. Please try again.</div>
              )}
            </div>
          </div>

          {/* Enhanced Project Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse" />
                <h3 className="text-2xl font-bold metallic-gradient">GhostFreakOS</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A sleek, modern Linux distribution based on Arch Linux. Designed for developers who value performance
                and elegance.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">Coming Soon</span>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform"
                >
                  <Link href="/projects/ghostfreakos">Learn More →</Link>
                </Button>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse" />
                <h3 className="text-2xl font-bold metallic-gradient">ZenShell</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A minimalist, developer-centric shell built exclusively for GhostFreakOS. Cold, disciplined, and
                efficient.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">In Development</span>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-purple-400 hover:text-purple-300 group-hover:translate-x-1 transition-transform"
                >
                  <Link href="/projects/zenshell">Learn More →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
