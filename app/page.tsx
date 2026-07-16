'use client'

import { GlobalHeader } from '@/components/global-header'
import { HeroSection } from '@/components/hero-section'
import { WelcomeSection } from '@/components/welcome-section'
import { ExperiencesSection } from '@/components/experiences-section'
import { GallerySection } from '@/components/gallery-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full bg-background">
      <GlobalHeader />
      <HeroSection />
      <WelcomeSection />
      <ExperiencesSection />
      <GallerySection />
      <Footer />
    </main>
  )
}
