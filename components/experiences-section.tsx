'use client'

import { ExperienceCard } from './experience-card'
import { useLanguage } from '@/contexts/language-context'

export function ExperiencesSection() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t('home.cards.pizzaHot.title'),
      image: '/images/pizza-hot.png',
      description: t('home.cards.pizzaHot.description'),
      href: '/pizza-hot',
    },
    {
      title: t('home.cards.gameCity.title'),
      image: '/images/game-city.png',
      description: t('home.cards.gameCity.description'),
      href: '/game-city',
    },
    {
      title: t('home.cards.privateLounge.title'),
      image: '/images/private-lounge.png',
      description: t('home.cards.privateLounge.description'),
      href: '/lounge',
    },
    {
      title: t('home.cards.poolArea.title'),
      image: '/images/pool-area.png',
      description: t('home.cards.poolArea.description'),
      href: '/pool',
    },
  ]

  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#d7cc32] mb-4 text-center">
          {t('home.experiences.title')}
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          {t('home.experiences.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.title}
              title={exp.title}
              image={exp.image}
              description={exp.description}
              href={exp.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
