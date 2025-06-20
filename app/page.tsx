import { Header } from "@/components/header"
import { EnhancedHero } from "@/components/enhanced-hero"
import { Features } from "@/components/features"
import { CommunityShowcase } from "@/components/community-showcase"
import { Roadmap } from "@/components/roadmap"
import { Status } from "@/components/status"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <EnhancedHero />
      <Features />
      <CommunityShowcase />
      <Roadmap />
      <Status />
      <Footer />
    </main>
  )
}
