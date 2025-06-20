import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GitBranch, Users, Star } from "lucide-react"

export function Status() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 titanium-gradient">Current Status</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're in the early stages of building something amazing. Here's where we stand today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <GitBranch className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold metallic-gradient">GhostFreakOS</h3>
                <Badge variant="secondary" className="ml-auto">
                  In Development
                </Badge>
              </div>
              <p className="text-gray-400 mb-4">
                Our flagship Linux distribution based on Arch Linux is currently in active development. We're focusing
                on creating a sleek, modern experience for developers.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-2" />
                Expected Alpha: Q2 2024
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <GitBranch className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold metallic-gradient">ZenShell</h3>
                <Badge variant="default" className="ml-auto">
                  Active
                </Badge>
              </div>
              <p className="text-gray-400 mb-4">
                Our minimalist shell is actively being developed alongside GhostFreakOS. It embodies our philosophy of
                simplicity and performance.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Star className="h-4 w-4 mr-2" />
                Available on GitHub
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-gray-900/30 border-gray-800 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold metallic-gradient mb-4">Join Our Journey</h3>
              <p className="text-gray-400 mb-6">
                We're looking for passionate developers, designers, and testers to help us build the future of Linux
                distributions. Every contribution matters.
              </p>
              <div className="flex justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Contributors Welcome
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Early Stage
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Open Source
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
