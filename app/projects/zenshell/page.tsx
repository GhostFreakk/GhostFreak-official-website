import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Star, GitFork, Download, Terminal } from "lucide-react"
import Link from "next/link"

export default function ZenShellPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 titanium-gradient">ZenShell</h1>
              <p className="text-xl text-gray-400 mb-8">
                A minimalist, fast, and developer-centric shell built exclusively for GhostFreakOS. Designed for focus,
                performance, and simplicity.
              </p>

              <div className="flex justify-center gap-4 mb-8">
                <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
                  <Link href="https://github.com/GhostFreakOS/Zenshell" target="_blank">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Link href="#installation">
                    <Download className="mr-2 h-5 w-5" />
                    Install
                  </Link>
                </Button>
              </div>

              <div className="flex justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  2 stars
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" />
                  0 forks
                </div>
                <Badge variant="default">Active</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <Card className="bg-gray-900/50 border-gray-800 mb-8">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold metallic-gradient mb-4">Overview</h2>
                    <p className="text-gray-400 mb-4">
                      ZenShell strips away distractions and embraces the minimalist philosophy behind the GhostFreak
                      identity. Built specifically for GhostFreakOS, it provides a clean, efficient command-line
                      experience that helps developers maintain focus and productivity.
                    </p>
                    <p className="text-gray-400">
                      Embracing the "cold and disciplined" philosophy, ZenShell focuses on what matters most:
                      performance, simplicity, and an uncluttered interface that lets you concentrate on your work.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800 mb-8">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold metallic-gradient mb-4">Philosophy</h2>
                    <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                      <p className="text-gray-300 italic text-center">
                        "Cold and disciplined - ZenShell embodies the minimalist approach to command-line interaction."
                      </p>
                    </div>
                    <p className="text-gray-400">
                      ZenShell is designed around the principle that less is more. Every feature is carefully considered
                      and only included if it serves a clear purpose in enhancing developer productivity without adding
                      complexity.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800 mb-8" id="installation">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold metallic-gradient mb-4">Installation</h2>
                    <p className="text-gray-400 mb-4">
                      ZenShell comes pre-installed with GhostFreakOS. For manual installation:
                    </p>
                    <div className="bg-black rounded-lg p-4 mb-4">
                      <code className="text-green-400">
                        <Terminal className="inline h-4 w-4 mr-2" />
                        git clone https://github.com/GhostFreakOS/Zenshell.git
                      </code>
                    </div>
                    <div className="bg-black rounded-lg p-4 mb-4">
                      <code className="text-green-400">
                        <Terminal className="inline h-4 w-4 mr-2" />
                        cd Zenshell && sudo ./install.sh
                      </code>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Note: ZenShell is optimized for GhostFreakOS and may require additional configuration on other
                      distributions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold metallic-gradient mb-4">Features</h2>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Minimalist design with zero visual clutter
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Lightning-fast performance with minimal resource usage
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Developer-centric features without bloat
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Seamless integration with GhostFreakOS
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Customizable yet simple configuration
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Built-in productivity enhancements for developers
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
                        Shell
                      </Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        C++
                      </Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        Lua
                      </Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        Linux
                      </Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        Performance
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800 mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold metallic-gradient mb-4">Compatibility</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Primary OS:</span>
                        <span className="text-white">GhostFreakOS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Base:</span>
                        <span className="text-white">Arch Linux</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Language:</span>
                        <span className="text-white">C++ Configurd by Lua</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold metallic-gradient mb-4">Quick Links</h3>
                    <div className="space-y-3">
                      <Button asChild variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                        <Link href="https://github.com/GhostFreakOS/Zenshell/blob/main/README.md" target="_blank">
                          Documentation
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                        <Link href="https://github.com/GhostFreakOS/Zenshell/issues" target="_blank">
                          Report Issues
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                        <Link href="/projects/ghostfreakos">GhostFreakOS</Link>
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
