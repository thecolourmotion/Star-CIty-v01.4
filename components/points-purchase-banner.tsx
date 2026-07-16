'use client'

import { useLanguage } from '@/contexts/language-context'

export function PointsPurchaseBanner() {
  const { t } = useLanguage()

  const pointsPackages = [
    { price: '5,000F', points: 20 },
    { price: '10,000F', points: 50 },
    { price: '20,000F', points: 120 },
    { price: '30,000F', points: 200 },
    { price: '40,000F', points: 300 },
    { price: '50,000F', points: 400 },
  ]

  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: 'rgb(215, 204, 50)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Message */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            {t('pointsPurchase.title')}
          </h2>
        </div>

        {/* Price List */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {pointsPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-black rounded-lg p-4 sm:p-6 text-center shadow-sm"
              >
                <p className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {pkg.price}
                </p>
                <p className="text-base sm:text-lg text-white">
                  → {pkg.points} points
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Note */}
        <div className="text-center">
          <p className="text-base sm:text-lg font-semibold text-black bg-white bg-opacity-30 rounded-lg py-3 px-4 inline-block">
            {t('pointsPurchase.bonus')}
          </p>
        </div>
      </div>
    </section>
  )
}
