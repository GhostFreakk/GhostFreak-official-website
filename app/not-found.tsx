"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold mb-4 metallic-gradient">404</h1>
      <p className="text-xl text-gray-400 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Button asChild className="bg-white text-black rounded-full px-8 py-3 text-lg font-semibold">
        <Link href="/">Go Home</Link>
      </Button>
    </main>
  )
} 