import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Zap, Heart, Target, Rocket } from "lucide-react"

const values = [
  {
    icon: Code,
    title: "Open Source First",
    description: "All our projects are open source, fostering transparency and community collaboration.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by developers, for developers. We listen to our community and iterate based on feedback.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Every line of code is optimized for speed, efficiency, and minimal resource usage.",
  },
  {
    icon: Heart,
    title: "Developer Experience",
    description: "We prioritize creating tools that developers actually want to use every day.",
  },
  {
    icon: Target,
    title: "Minimalist Design",
    description: "Clean, focused interfaces that eliminate distractions and enhance productivity.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We're not afraid to experiment with new ideas and push the boundaries of what's possible.",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 titanium-gradient">Our Philosophy</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The principles that guide everything we build at GhostFreak.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 glow-effect"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 mr-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold metallic-gradient">{value.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
