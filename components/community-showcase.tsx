import { Card, CardContent } from "@/components/ui/card"
import { Github, Bell, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CommunityShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 titanium-gradient">Follow Our Journey</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with our development progress and upcoming releases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Github className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold metallic-gradient mb-4">Watch on GitHub</h3>
              <p className="text-gray-400 mb-6">
                Follow our repositories to stay updated with the latest development progress and releases.
              </p>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Link href="https://github.com/GhostFreakOS" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Follow on GitHub
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Bell className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold metallic-gradient mb-4">Get Notified</h3>
              <p className="text-gray-400 mb-6">
                Be the first to know when GhostFreakOS releases are available for download.
              </p>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Link href="#early-access">Subscribe for Updates</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold metallic-gradient mb-4">Stay Informed</h3>
              <p className="text-gray-400 mb-6">
                Follow our development blog and announcements to learn about new features and updates.
              </p>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Link href="/about">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
              In Development
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" />
              Private Development
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
