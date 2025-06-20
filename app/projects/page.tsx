import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "ghostfreakos",
    name: "GhostFreakOS",
    description:
      "A sleek, modern, and easy-to-use Linux distribution coming soon. Based on Arch Linux and designed for developers who value simplicity and performance.",
    longDescription:
      "GhostFreakOS is a carefully crafted Linux distribution that combines the power of Arch Linux with a user-friendly experience. Created by Ahmed Shafiq (Ghosty/theFreakGhost) and co-owned by Asaad Zain (asaadzx), it represents the GhostFreak philosophy of cold discipline and focused development.",
    tech: ["Linux", "Arch Linux", "System Design", "OS Development"],
    stars: 45,
    forks: 8,
    status: "In Development",
    github: "https://github.com/GhostFreakOS/GhostFreakOS",
    demo: "https://ghostfreakos.org",
  },
  {
    id: "zenshell",
    name: "ZenShell",
    description:
      "A minimalist, fast, and developer-centric shell built exclusively for GhostFreakOS. Designed for focus, performance, and simplicity with a 'cold and disciplined' philosophy.",
    longDescription:
      "ZenShell strips away distractions and embraces the minimalist philosophy behind the GhostFreak identity. Built specifically for GhostFreakOS, it provides a clean, efficient command-line experience that helps developers maintain focus and productivity.",
    tech: ["Shell", "C", "Linux", "Performance"],
    stars: 23,
    forks: 5,
    status: "Active",
    github: "https://github.com/GhostFreakOS/Zenshell",
    demo: "https://zenshell.ghostfreakos.org",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 titanium-gradient">Our Projects</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our open source projects that we're building to push the boundaries of Linux distributions and
              developer tools.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 glow-effect"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl metallic-gradient">{project.name}</CardTitle>
                    <Badge variant={project.status === "Active" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                  <p className="text-gray-400">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      {project.forks}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                    <Button asChild className="bg-white text-black hover:bg-gray-200">
                      <Link href={`/projects/${project.id}`}>
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Want to contribute? Check out our GitHub repositories and join the community!
            </p>
            <Button asChild size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Link href="https://github.com/ghostfreak" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                View All on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
