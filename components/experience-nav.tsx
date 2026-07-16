'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/language-context'

export function ExperienceNav() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const experiences = [
    { href: '/pizza-hot', label: t('nav.pizzaHot') },
    { href: '/game-city', label: t('nav.gameCity') },
    { href: '/lounge', label: t('nav.privateLounge') },
    { href: '/pool', label: t('nav.poolArea') },
  ]

  return (
    <nav className="w-full bg-card border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto gap-0">
          {experiences.map((exp) => (
            <Link
              key={exp.href}
              href={exp.href}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
                pathname === exp.href
                  ? 'border-accent text-accent'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {exp.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
