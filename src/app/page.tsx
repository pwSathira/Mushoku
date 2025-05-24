"use client"

import { Navigation } from "../components/Navigation"
import { Hero } from "../components/Hero"
import { Features } from "../components/Features"
import { LearningModes } from "../components/LearningModes"
import { CTA } from "../components/CTA"
import { Footer } from "../components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <Hero />
      <Features />
      <LearningModes />
      <CTA />
      <Footer />
    </div>
  )
}
