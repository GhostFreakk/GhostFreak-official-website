"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<null | "success" | "error">(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const response = await fetch("https://formspree.io/f/mqabdpkd", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })
      const data = await response.json()
      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 titanium-gradient">Get in Touch</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Have questions about our projects? Want to learn more about GhostFreakOS or ZenShell? We'd love to hear
                from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl metallic-gradient">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {status === "success" && (
                    <div className="mb-4 p-3 rounded bg-green-800 text-green-100 text-center">Thank you! Your message has been sent.</div>
                  )}
                  {status === "error" && (
                    <div className="mb-4 p-3 rounded bg-red-800 text-red-100 text-center">Oops! Something went wrong. Please try again.</div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-white text-black hover:bg-gray-200" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold metallic-gradient mb-4">Other Ways to Reach Us</h3>
                    <div className="space-y-4">
                      <Button asChild variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                        <Link href="https://github.com/GhostFreakOS" target="_blank">
                          <Github className="mr-3 h-5 w-5" />
                          GitHub - Follow our development progress
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                        <Link href="mailto:hello@ghostfreak.dev">
                          <Mail className="mr-3 h-5 w-5" />
                          ghostfreakinc@gmail.com
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold metallic-gradient mb-4">About Our Projects</h3>
                    <p className="text-gray-400 mb-4">
                      Interested in learning more about GhostFreakOS or ZenShell? We're happy to answer questions about
                      our development process and upcoming releases.
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Project roadmaps and timelines
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Technical specifications
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Release notifications
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold metallic-gradient mb-4">Response Time</h3>
                    <p className="text-gray-400 text-sm">
                      We typically respond to messages within 24-48 hours. For project updates and announcements, follow
                      us on GitHub.
                    </p>
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
