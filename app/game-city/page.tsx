'use client'

import { GlobalHeader } from '@/components/global-header'
import { Footer } from '@/components/footer'
import { ExperienceHero } from '@/components/experience-hero'
import { PointsPurchaseBanner } from '@/components/points-purchase-banner'
import { GameCard } from '@/components/game-card'
import { Button } from '@/components/ui/button'
import { openWhatsApp, whatsappMessages } from '@/lib/whatsapp-helper'
import { useLanguage } from '@/contexts/language-context'
import {
  Gamepad2,
  Zap,
  Trophy,
  Users,
  Clock,
  Smartphone,
  Sparkles,
  Music,
} from 'lucide-react'
import Image from 'next/image'

// Features will be loaded from translation system in component

const games = [
  { name: 'Dance', image: '/games/dance.png', players: '2 Players', points: 5 },
  { name: 'Jurassic Park', image: '/games/jurassic-park.png', players: '2 Players', points: 5 },
  { name: 'Raizing Storm', image: '/games/raizing-storm.png', players: '2 Players', points: 5 },
  { name: 'Pumpkin Party', image: '/games/pumpkin-party.png', players: '1 Player', points: 2 },
  { name: 'Car Race', image: '/games/car-race.png', players: '1–2 Players', points: 5 },
  { name: 'Jungle IQ', image: '/games/jungle-iq.png', players: '2 Players', points: 2 },
  { name: 'Prize Claw', image: '/games/prize-claw.png', players: '2 Players', points: 2 },
  { name: 'Car Game', image: '/games/car-game.png', players: '1 Player', points: 2 },
  { name: 'Crazy Basketball', image: '/games/crazy-basketball.png', players: '2 Players', points: 3 },
  { name: 'Rescue', image: '/games/rescue.png', players: '4 Players', points: 3 },
  { name: 'Air Hockey', image: '/games/air-hockey.png', players: '2 Players', points: 3 },
  { name: 'Pandora Box', image: '/games/pandora-box.png', players: '1–2 Players', points: 3 },
]

const galleryImages = [
  {
    src: '/images/gallery-arcade.png',
    alt: 'Gaming machines at Game City',
  },
  {
    src: '/images/gallery-arcade.png',
    alt: 'Tournament area',
  },
  {
    src: '/images/gallery-arcade.png',
    alt: 'VR gaming station',
  },
]

export default function GameCityPage() {
  const { t, language } = useLanguage()
  
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
        title={t('gameCity.title')}
        subtitle={t('gameCity.subtitle')}
        image="/images/game-city.png"
        imageAlt="Game City gaming zone"
      />

      <main className="flex-1 pt-16">
        {/* Points Purchase Banner */}
        <PointsPurchaseBanner />

        {/* Our Games Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t('gameCity.ourGames')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {games.map((game, index) => (
                <GameCard
                  key={index}
                  name={game.name}
                  image={game.image}
                  players={game.players}
                  points={game.points}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => openWhatsApp(whatsappMessages.gameCityBookNow)}
                className="text-black font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'rgb(215, 204, 50)' }}
              >
                {t('gameCity.bookNow')}
              </Button>
            </div>
          </div>
        </section>

        {/* VR Games Section */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                {t('gameCity.other')}
              </h2>
            </div>

            {/* VR Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Left: VR Headset Image */}
              <div className="flex items-center">
                <div className="relative w-full h-96">
                  <Image
                    src="/vr/vr-headset.png"
                    alt="VR Headset"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right: VR Experience and Image */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    {t('gameCity.vrGames')}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    {t('gameCity.vrDescription')}
                  </p>
                </div>

                <div className="relative w-full h-96">
                  <Image
                    src="/vr/vr-woman-playing.png"
                    alt="Woman playing VR"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => openWhatsApp(whatsappMessages.gameCityBookNow)}
                className="text-black font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'rgb(215, 204, 50)' }}
              >
                {t('gameCity.bookNow')}
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t('gameCity.experienceAction')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('gameCity.checkOutGamingSetup')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="relative h-80 rounded-xl overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{t('gameCity.readyToPlay')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('gameCity.bookingDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => openWhatsApp(whatsappMessages.gameCityBookNow)}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                {t('gameCity.bookNow')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2"
                onClick={() => openWhatsApp(whatsappMessages.gameCityContactUs)}
              >
                {t('gameCity.contactUs')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
