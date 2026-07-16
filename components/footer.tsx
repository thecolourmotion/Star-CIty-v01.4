'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/language-context'
import { openWhatsApp, whatsappMessages } from '@/lib/whatsapp-helper'

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-slate-950/20 text-background py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/star-city-logo.png"
                alt="Star City Complex Logo"
                width={167}
                height={100}
                className="h-auto w-full max-w-sm"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="text-background">
            <h4 className="font-semibold mb-4 text-sm text-[#d7cc32]">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-sm text-background">
              <li>
                <button
                  onClick={() => openWhatsApp(whatsappMessages.generalContact)}
                  className="text-white hover:opacity-100 transition-opacity text-left"
                >
                  {t('footer.phone')}
                </button>
              </li>
              <li>
                <a
                  href="mailto:info@starcity.com"
                  className="text-white hover:opacity-100 transition-opacity"
                >
                  {t('footer.email')}
                </a>
              </li>
              <li className="text-xs text-white">
                {t('footer.address')}
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="text-background">
            <h4 className="font-semibold mb-4 text-sm text-[#d7cc32]">{t('footer.hours')}</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>{t('footer.hoursData.monThu')}</li>
              <li>{t('footer.hoursData.friSat')}</li>
              <li>{t('footer.hoursData.sun')}</li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-background">
            <h4 className="font-semibold mb-4 text-sm text-[#d7cc32]">{t('footer.followUs')}</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-white/10 transition-all"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-white/10 transition-all"
                aria-label="Instagram"
              >
                @
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-white/10 transition-all"
                aria-label="Twitter"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Copyright */}
        <div className="text-center text-sm opacity-75 text-background">
          <p>&copy; {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
