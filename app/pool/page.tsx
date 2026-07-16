'use client'

import { GlobalHeader } from '@/components/global-header'
import { Footer } from '@/components/footer'
import { ExperienceHero } from '@/components/experience-hero'
import { FeaturesSection } from '@/components/features-section'
import { Button } from '@/components/ui/button'
import { openWhatsApp, whatsappMessages } from '@/lib/whatsapp-helper'
import { useLanguage } from '@/contexts/language-context'
import {
  Waves,
  Sun,
  Umbrella,
  Utensils,
  Dumbbell,
  Shield,
  Users,
  Calendar,
} from 'lucide-react'
import Image from 'next/image'

export default function PoolPage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Waves,
      title: t('pool.features.crystalPools.title'),
      description: t('pool.features.crystalPools.desc'),
    },
    {
      icon: Sun,
      title: t('pool.features.sunbathing.title'),
      description: t('pool.features.sunbathing.desc'),
    },
    {
      icon: Umbrella,
      title: t('pool.features.shades.title'),
      description: t('pool.features.shades.desc'),
    },
    {
      icon: Utensils,
      title: t('pool.features.dining.title'),
      description: t('pool.features.dining.desc'),
    },
    {
      icon: Dumbbell,
      title: t('pool.features.fitness.title'),
      description: t('pool.features.fitness.desc'),
    },
    {
      icon: Shield,
      title: t('pool.features.staff.title'),
      description: t('pool.features.staff.desc'),
    },
    {
      icon: Users,
      title: t('pool.features.events.title'),
      description: t('pool.features.events.desc'),
    },
    {
      icon: Calendar,
      title: t('pool.features.yearround.title'),
      description: t('pool.features.yearround.desc'),
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
        title={t('pool.title')}
        subtitle={t('pool.subtitle')}
        image="/images/pool-area.png"
        imageAlt="Pool Area"
      />

      <main className="flex-1 pt-16">
        {/* Features Section */}
        <FeaturesSection features={features} />

        {/* Gallery Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t('pool.gallery')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('pool.experienceFacilities')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/gallery-pool.png"
                    alt={`Pool area ${i}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Booking Section */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t('pool.ratesAndPackages')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('pool.flexiblePricing')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: t('pool.dailyPass'),
                  price: t('pool.pricing.daily'),
                  duration: t('pool.perPerson'),
                  features: [
                    t('pool.wifiAccess'),
                    t('pool.parkingSpace'),
                  ],
                  whatsappMessage: whatsappMessages.poolDailyPass,
                },
                {
                  title: t('pool.monthlyPass'),
                  price: t('pool.pricing.monthly'),
                  duration: '',
                  features: [
                    t('pool.unlimitedPoolAccess'),
                    t('pool.wifiAccess'),
                    t('pool.parkingSpace'),
                  ],
                  whatsappMessage: whatsappMessages.poolMonthlyPass,
                },
                {
                  title: t('pool.yearlyPass'),
                  price: t('pool.pricing.yearly'),
                  duration: '',
                  features: [
                    t('pool.unlimitedPoolAccess'),
                    t('pool.wifiAccess'),
                    t('pool.exclusiveEvents'),
                  ],
                  whatsappMessage: whatsappMessages.poolYearlyPass,
                },
              ].map((pkg, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow text-center"
                >
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-accent">
                      {pkg.price}
                    </span>
                    {pkg.duration && <p className="text-muted-foreground mt-1">{pkg.duration}</p>}
                  </div>
                  <ul className="space-y-3 mb-6 text-left">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => openWhatsApp(pkg.whatsappMessage)}
                    className="w-full text-black font-semibold hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: 'rgb(215, 204, 50)' }}
                  >
                    Get Pass
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Dive In?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your visit today and enjoy a refreshing experience at Star City&apos;s premium pool complex.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => openWhatsApp(whatsappMessages.poolBookNow)}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2"
                onClick={() => openWhatsApp(whatsappMessages.generalLearnMore)}
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
