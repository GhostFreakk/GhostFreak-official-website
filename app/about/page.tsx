import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 titanium-gradient">About GhostFreak</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A small but passionate open source organization dedicated to creating innovative developer tools.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold metallic-gradient mb-4">Our Mission</h2>
                  <p className="text-gray-400 mb-4">
                    We believe that great developer tools should be accessible to everyone. That's why we create open
                    source projects that push the boundaries of what's possible in software development.
                  </p>
                  <p className="text-gray-400">
                    Our focus is on building tools that not only solve real problems but do so in innovative ways that
                    inspire the next generation of developers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold metallic-gradient mb-4">What We Do</h2>
                  <p className="text-gray-400 mb-4">We currently maintain two active open source projects:</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <strong>GhostFreakOS</strong> - A sleek Linux distribution based on Arch Linux
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <strong>ZenShell</strong> - A minimalist shell built for GhostFreakOS
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-900/50 border-gray-800 mb-16">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold metallic-gradient mb-6 text-center">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">Ahmed Shafiq</h3>
                    <p className="text-gray-400 text-sm mb-1">Ghosty / theFreakGhost</p>
                    <p className="text-gray-500 text-xs">Creator & CEO</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">Asaad Zain</h3>
                    <p className="text-gray-400 text-sm mb-1">asaadzx</p>
                    <p className="text-gray-500 text-xs">Co-owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 mb-16">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold metallic-gradient mb-6 text-center">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">Open Source</h3>
                    <p className="text-gray-400 text-sm">
                      We believe in transparency and making our projects available for everyone to use and learn from.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                    <p className="text-gray-400 text-sm">
                      We're not afraid to experiment with cutting-edge technologies to solve real problems.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">Quality</h3>
                    <p className="text-gray-400 text-sm">
                      We focus on creating high-quality, polished products that developers actually want to use.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <h2 className="text-3xl font-bold metallic-gradient mb-6">Stay Updated</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Follow our progress and be the first to know when our projects are ready for release.
              </p>

              <div className="flex justify-center gap-4">
                <Button asChild size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Link href="https://github.com/GhostFreakOS" target="_blank">
                    <Github className="mr-2 h-5 w-5" />
                    Follow on GitHub
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
