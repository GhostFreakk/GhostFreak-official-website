import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Star, GitFork, Download, Terminal, Users } from "lucide-react"
import Link from "next/link"

export default function GhostFreakOSPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 titanium-gradient">GhostFreakOS</h1>
              <p className="text-xl text-gray-400 mb-8">
                A sleek, modern, and easy-to-use Linux distribution based on Arch Linux, currently in alpha stage.
              </p>

              <div className="flex justify-center gap-4 mb-8">
                <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
                  <Link href="https://github.com/GhostFreakOS/GhostFreakOS" target="_blank">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Link href="#download">
                    <Download className="mr-2 h-5 w-5" />
                    Download
                  </Link>
                </Button>
              </div>

              <div className="flex justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  234 stars
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" />
                  45 forks
                </div>
                <Badge variant="secondary">Alpha</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <Card className="bg-gray-900/50 border-gray-800 mb-8">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold metallic-gradient mb-4">Overview</h2>
                    <p className="text-gray-400 mb-4">
                      GhostFreakOS is a carefully crafted Linux distribution that combines the power of Arch Linux with
                      a user-friendly experience. It represents the GhostFreak philosophy of cold discipline and focused
                      development.
                    </p>
                    <p className="text-gray-400">
                      Built for developers who value simplicity and performance, GhostFreakOS strips away unnecessary
                      bloat while maintaining the flexibility and power that makes Arch Linux so beloved by the
                      community.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800 mb-8">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold metallic-gradient mb-4">Team</h2>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Ahmed Shafiq (Ghosty / theFreakGhost)</h3>
                          <p className="text-gray-400 text-sm">Creator & CEO</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Asaad Zain (asaadzx)</h3>
                          <p className="text-gray-400 text-sm">Co-owner</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-dashed border-gray-700 mb-8" id="download">
                  <CardContent className="flex flex-col items-center justify-center min-h-[320px] p-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold metallic-gradient mb-6 text-center tracking-tight">
                      Coming Soon
                    </h2>
                    <p className="text-lg text-gray-400 mb-4 text-center max-w-xl">
                      The first public release of <span className="font-bold text-white">GhostFreakOS</span> is on its way.<br />
                      Stay tuned for download and installation instructions.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="animate-pulse inline-block w-3 h-3 rounded-full bg-yellow-400"></span>
                      <span className="text-yellow-400 font-medium">Alpha not yet available</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold metallic-gradient mb-4">Features</h2>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Based on Arch Linux for maximum flexibility and performance
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Sleek and modern user interface with minimalist design
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Developer-focused tools and configurations out of the box
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Custom ZenShell for enhanced command-line experience
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Optimized for performance and resource efficiency
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Rolling release model with cutting-edge packages
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-gray-900/50 border-gray-800 mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold metallic-gradient mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        Linux
                      </Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        Arch Linux
                      </Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        System Design
                      </Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        OS Development
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800 mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold metallic-gradient mb-4">Status</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Current Version:</span>
                        <span className="text-white">Alpha 0.1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Base:</span>
                        <span className="text-white">Arch Linux</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Release Type:</span>
                        <span className="text-yellow-400">Rolling</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold metallic-gradient mb-4">Quick Links</h3>
                    <div className="space-y-3">
                      <Button asChild variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                        <Link href="https://github.com/GhostFreakOS/GhostFreakOS/blob/main/README.md" target="_blank">
                          Documentation
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                        <Link href="https://github.com/GhostFreakOS/GhostFreakOS/issues" target="_blank">
                          Report Issues
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                        <Link href="https://github.com/GhostFreakOS/GhostFreakOS/discussions" target="_blank">
                          Community
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                        <Link href="/projects/zenshell">ZenShell</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
