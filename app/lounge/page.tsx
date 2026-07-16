'use client'

import { GlobalHeader } from '@/components/global-header'
import { Footer } from '@/components/footer'
import { ExperienceHero } from '@/components/experience-hero'
import { FeaturesSection } from '@/components/features-section'
import { Button } from '@/components/ui/button'
import { openWhatsApp, whatsappMessages } from '@/lib/whatsapp-helper'
import { useLanguage } from '@/contexts/language-context'
import {
  Armchair,
  Wine,
  Music,
  Users,
  Wifi,
  Lightbulb,
  Coffee,
  DoorOpen,
} from 'lucide-react'
import Image from 'next/image'

export default function LoungePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Armchair,
      title: t('lounge.features.seating.title'),
      description: t('lounge.features.seating.desc'),
    },
    {
      icon: Wine,
      title: t('lounge.features.beverages.title'),
      description: t('lounge.features.beverages.desc'),
    },
    {
      icon: Music,
      title: t('lounge.features.sound.title'),
      description: t('lounge.features.sound.desc'),
    },
    {
      icon: Users,
      title: t('lounge.features.space.title'),
      description: t('lounge.features.space.desc'),
    },
    {
      icon: Wifi,
      title: t('lounge.features.wifi.title'),
      description: t('lounge.features.wifi.desc'),
    },
    {
      icon: Lightbulb,
      title: t('lounge.features.lighting.title'),
      description: t('lounge.features.lighting.desc'),
    },
    {
      icon: Coffee,
      title: t('lounge.features.refreshments.title'),
      description: t('lounge.features.refreshments.desc'),
    },
    {
      icon: DoorOpen,
      title: t('lounge.features.valet.title'),
      description: t('lounge.features.valet.desc'),
    },
  ]
  
  const experiences = [
    { href: '/pizza-hot', label: t('nav.pizzaHot') },
    { href: '/game-city', label: t('nav.gameCity') },
    { href: '/lounge', label: t('nav.privateLounge') },
    { href: '/pool', label: t('nav.poolArea') },
  ]

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <GlobalHeader showBackButton experiences={experiences} />
      <ExperienceHero
        title={t('lounge.title')}
        subtitle={t('lounge.subtitle')}
        image="/images/private-lounge.png"
        imageAlt="Private Lounge"
      />

      <main className="flex-1 pt-16">
        {/* Features Section */}
        <FeaturesSection features={features} />

        {/* Gallery Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t('lounge.gallery')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('lounge.elegantSpaces')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { src: '/images/lounge-gallery-1.png', alt: 'Lounge ambiance' },
                { src: '/images/lounge-gallery-2.png', alt: 'Elegant seating' },
                { src: '/images/lounge-gallery-3.png', alt: 'Social gathering' },
                { src: '/images/lounge-gallery-4.png', alt: 'Premium lounge' },
                { src: '/images/lounge-gallery-5.png', alt: 'Relaxation space' },
                { src: '/images/lounge-gallery-6.png', alt: 'Lounge experience' },
              ].map((image, index) => (
                <div key={index} className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 bg-foreground text-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{t('lounge.planYourEvent')}</h2>
            <p className="text-lg mb-8 opacity-90">
              {t('lounge.eventDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-background text-foreground hover:bg-background/10"
                onClick={() => openWhatsApp(whatsappMessages.loungeContactUs)}
              >
                {t('lounge.contactUs')}
              </Button>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
                onClick={() => openWhatsApp(whatsappMessages.generalCall)}
              >
                {t('lounge.call')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
