'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { QuantitySelector } from '@/components/quantity-selector'

interface MenuItem {
  id: string
  name: string
  description: string
  prices: Record<string, number> | number
  category: string
}

interface MenuCategory {
  title: string
  subtitle?: string
  items: MenuItem[]
}

import { useLanguage } from '@/contexts/language-context'

interface RestaurantMenuProps {
  categories: MenuCategory[]
  cart: Record<string, number>
  onQuantityChange: (id: string, quantity: number) => void
  onOrderNow: (id: string, name: string, prices: Record<string, number> | number) => void
}

// Map category titles to banner image paths
const categoryBannerMap: Record<string, string> = {
  'Pizza': '/category-banners/pizza.png',
  'Poulets Panés': '/category-banners/chicken.png',
  'Burgers': '/category-banners/burgers.png',
  'Shawarma': '/category-banners/shawarma.png',
  'Combo': '/category-banners/combo.png',
  'Suppléments': '/category-banners/supplements.png',
  'Smoothies': '/category-banners/smoothies.png',
  'Glaces': '/category-banners/glaces.png',
  'Nos Boissons': '/category-banners/drinks.png',
  'Vin & Whisky': '/category-banners/wine.png',
}

export function RestaurantMenu({
  categories,
  cart,
  onQuantityChange,
  onOrderNow,
}: RestaurantMenuProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-12 py-8">
      {categories.map((category, idx) => (
        <section key={idx} className="rounded-lg overflow-hidden">
          {/* Category Header */}
          <div className="text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'lab(66.128 -0.0000298023 0.0000119209)' }}>{category.title}</h2>
          </div>

          {/* Category Banner Image */}
          {categoryBannerMap[category.title] && (
            <div className="mb-8">
              <img
                src={categoryBannerMap[category.title]}
                alt={`${category.title} category banner`}
                className="w-full h-auto rounded-lg object-cover aspect-video"
              />
            </div>
          )}

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {category.items.map((item) => (
              <div key={item.id} className="flex flex-col">
                {/* Item Header with Price */}
                <div className="mb-3">
                  <h3 className="font-bold text-lg" style={{ color: 'rgb(215, 204, 50)' }}>{item.name}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Divider and Price(s) with Quantity Selectors */}
                <div className="space-y-2 mb-4">
                  {typeof item.prices === 'object' ? (
                    Object.entries(item.prices).map(([size, price]) => {
                      const variationId = `${item.id}-${size}`
                      const variationQuantity = cart[variationId] || 0
                      return (
                        <div key={size} className="flex items-center justify-between gap-3">
                          <div className="flex-1 flex items-center gap-2">
                            <div className="flex-1 border-b border-border border-dotted" />
                          <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'lab(66.128 -0.0000298023 0.0000119209)' }}>
                            {size}:
                          </span>
                          </div>
                          <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'lab(66.128 -0.0000298023 0.0000119209)' }}>
                            {price.toLocaleString()} XAF
                          </span>
                          <QuantitySelector
                            quantity={variationQuantity}
                            onQuantityChange={(qty) => onQuantityChange(variationId, qty)}
                            size="sm"
                          />
                        </div>
                      )
                    })
                  ) : (
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 border-b border-border border-dotted" />
                      <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'lab(66.128 -0.0000298023 0.0000119209)' }}>
                        {item.prices.toLocaleString()} XAF
                      </span>
                      <QuantitySelector
                        quantity={cart[item.id] || 0}
                        onQuantityChange={(qty) => onQuantityChange(item.id, qty)}
                        size="sm"
                      />
                    </div>
                  )}
                </div>

                {/* Order Button - kept in original position */}
                <div className="mt-auto">
                  <Button
                    onClick={() => onOrderNow(item.id, item.name, item.prices)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
                    size="sm"
                  >
                    <MessageCircle size={16} />
                    {t('pizzaHot.orderButton')}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Category Divider */}
          {idx < categories.length - 1 && (
            <div className="mt-12 pt-12 border-t-2 border-border" />
          )}
        </section>
      ))}
    </div>
  )
}
