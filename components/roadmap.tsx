import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock } from "lucide-react"

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "completed",
    date: "Q4 2023",
    items: [
      "Project initialization and planning",
      "Core team formation",
      "Initial ZenShell development",
      "Community setup",
    ],
  },
  {
    phase: "Phase 2",
    title: "Development",
    status: "current",
    date: "Q1 2024",
    items: [
      "GhostFreakOS base system development",
      "ZenShell feature implementation",
      "Testing infrastructure setup",
      "Documentation creation",
    ],
  },
  {
    phase: "Phase 3",
    title: "Alpha Release",
    status: "upcoming",
    date: "Q2 2024",
    items: [
      "GhostFreakOS alpha release",
      "Community testing program",
      "Bug fixes and improvements",
      "Performance optimizations",
    ],
  },
  {
    phase: "Phase 4",
    title: "Beta & Launch",
    status: "planned",
    date: "Q3-Q4 2024",
    items: ["Public beta release", "Stable release preparation", "Package repository setup", "Official launch"],
  },
]

export function Roadmap() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-400" />
      case "current":
        return <Clock className="h-5 w-5 text-blue-400 animate-pulse" />
      default:
        return <Circle className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "current":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "upcoming":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 titanium-gradient">Development Roadmap</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our journey to building the future of Linux distributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-gray-600" />

            <div className="space-y-8">
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-5 h-5 bg-black border-2 border-current rounded-full flex items-center justify-center">
                    {getStatusIcon(item.status)}
                  </div>

                  <Card className="ml-16 bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 w-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <h3 className="text-xl font-bold metallic-gradient">{item.title}</h3>
                          <Badge variant="outline" className={`${getStatusColor(item.status)} capitalize`}>
                            {item.status}
                          </Badge>
                        </div>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>

                      <ul className="space-y-2">
                        {item.items.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center text-gray-400">
                            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
