'use client'

import { useLanguage } from '@/contexts/language-context'

export function WelcomeSection() {
  const { t } = useLanguage()

  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#d7cc32]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 text-balance">
          {t('home.welcome.title')}
        </h2>
        <p className="text-lg sm:text-xl text-slate-900 font-medium leading-relaxed max-w-2xl mx-auto">
          {t('home.welcome.description')}
        </p>
      </div>
    </section>
  )
}
