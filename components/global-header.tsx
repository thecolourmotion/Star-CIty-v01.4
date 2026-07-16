'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/language-context'

interface GlobalHeaderProps {
  showBackButton?: boolean
  experiences?: Array<{ href: string; label: string }>
}

export function GlobalHeader({
  showBackButton = false,
  experiences = [],
}: GlobalHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const isExperiencePage = pathname !== '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Logo and Star City Button */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/star-city-logo.png"
                alt="Star City Complex Logo"
                width={120}
                height={72}
                className="h-14 sm:h-16 w-auto"
                priority
              />
            </Link>

          {/* Star City Button (Experience Pages Only) */}
          {showBackButton && (
            <Link
              href="/"
              className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-white bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              Star City
            </Link>
          )}

          {/* Desktop Navigation (Experience Pages Only) */}
          {showBackButton && isExperiencePage && (
            <nav className="hidden sm:flex items-center gap-6">
              {experiences.map((exp) => (
                <Link
                  key={exp.href}
                  href={exp.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === exp.href
                      ? 'text-black'
                      : 'text-white/70 hover:text-white'
                  }`}
                  style={pathname === exp.href ? { color: 'rgb(215, 204, 50)' } : {}}
                >
                  {exp.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

          {/* Right: Language Selector and Menu */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Language Selector */}
            <div className="flex gap-1 bg-transparent">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  language === 'en'
                    ? 'text-black scale-105 shadow-lg'
                    : 'text-white/70 hover:text-white scale-100'
                }`}
                style={language === 'en' ? { backgroundColor: 'rgb(215, 204, 50)' } : {}}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  language === 'fr'
                    ? 'text-black scale-105 shadow-lg'
                    : 'text-white/70 hover:text-white scale-100'
                }`}
                style={language === 'fr' ? { backgroundColor: 'rgb(215, 204, 50)' } : {}}
              >
                FR
              </button>
            </div>

            {/* Mobile Menu Button (Experience Pages Only) */}
            {isExperiencePage && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="sm:hidden text-white p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && isExperiencePage && (
          <div className="sm:hidden bg-black/50 backdrop-blur-sm border-t border-white/10">
            <nav className="py-4 space-y-2">
              {experiences.map((exp) => (
                <Link
                  key={exp.href}
                  href={exp.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded transition-colors ${
                    pathname === exp.href
                      ? 'text-black'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  style={pathname === exp.href ? { backgroundColor: 'rgb(215, 204, 50)' } : {}}
                >
                  {exp.label}
                </Link>
              ))}
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                {t('header.homePage')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
