'use client'

import { useState } from 'react'
import { GlobalHeader } from '@/components/global-header'
import { Footer } from '@/components/footer'
import { ExperienceHero } from '@/components/experience-hero'
import { RestaurantMenu } from '@/components/restaurant-menu'
import { CartSidebar } from '@/components/cart-sidebar'
import { ShoppingCart } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

const menuCategories = [
  {
    title: 'Pizza',
    subtitle: 'Eat in • Take Away • Delivery',
    items: [
      {
        id: '1',
        name: 'Pizza Suprême',
        description: 'Tomate, fromage, viande hachée, jambon saucisson, tranche tomate, oignon, champignon, poivron vert, olive noire.',
        prices: { 'Moyenne': 6000, 'Large': 9000 },
        category: 'Pizza',
      },
      {
        id: '2',
        name: 'Meat Lovers',
        description: 'Tomate, fromage, viande hachée, saucisson, jambon, olive, oignon.',
        prices: { 'Moyenne': 6000, 'Large': 9000 },
        category: 'Pizza',
      },
      {
        id: '3',
        name: 'All Américain',
        description: 'Tomate, fromage, viande hachée, saucisson, jambon blanc, poulet, olive, oignon.',
        prices: { 'Moyenne': 6000, 'Large': 9000 },
        category: 'Pizza',
      },
      {
        id: '4',
        name: 'Chicken Suprême',
        description: 'Tomate, fromage, blanc poulet, tranche tomate, poivron vert, oignon, olive.',
        prices: { 'Moyenne': 5000, 'Large': 8000 },
        category: 'Pizza',
      },
      {
        id: '5',
        name: 'BBQ Chicken Bacon',
        description: 'Sauce barbecue, fromage, blanc poulet, bacon, oignon.',
        prices: { 'Moyenne': 5000, 'Large': 8000 },
        category: 'Pizza',
      },
      {
        id: '6',
        name: 'Chicken & Mushroom',
        description: 'Tomate, fromage, blanc poulet, champignon, tranche tomate, oignon.',
        prices: { 'Moyenne': 6000, 'Large': 8000 },
        category: 'Pizza',
      },
      {
        id: '7',
        name: 'Creamy Chicken',
        description: 'Crème fraîche, fromage, blanc poulet, champignon, oignon.',
        prices: { 'Moyenne': 5000, 'Large': 8000 },
        category: 'Pizza',
      },
      {
        id: '8',
        name: 'Pizza City',
        description: 'Tomate, fromage, crevettes, champignon, oignon, maïs doux, poivron, olive.',
        prices: { 'Moyenne': 6000, 'Large': 9000 },
        category: 'Pizza',
      },
      {
        id: '9',
        name: 'Regina',
        description: 'Tomate, fromage, jambon, champignon, olive noire, oignon.',
        prices: { 'Moyenne': 6000, 'Large': 9000 },
        category: 'Pizza',
      },
      {
        id: '10',
        name: 'Pizza Extra Large',
        description: '',
        prices: { 'Extra Large': 12000 },
        category: 'Pizza',
      },
    ],
  },
  {
    title: 'Poulets Panés',
    subtitle: 'Eat in • Take Away • Delivery',
    items: [
      {
        id: '11',
        name: '2 Pièces & Frites',
        description: '',
        prices: 2000,
        category: 'Poulets Panés',
      },
      {
        id: '12',
        name: '3 Pièces & Frites',
        description: '',
        prices: 2500,
        category: 'Poulets Panés',
      },
      {
        id: '13',
        name: '6 Pièces & Frites',
        description: '',
        prices: 4000,
        category: 'Poulets Panés',
      },
      {
        id: '14',
        name: '12 Pièces & Frites',
        description: '',
        prices: 7500,
        category: 'Poulets Panés',
      },
      {
        id: '15',
        name: '24 Pièces & Frites',
        description: '',
        prices: 13500,
        category: 'Poulets Panés',
      },
    ],
  },
  {
    title: 'Burgers',
    subtitle: 'Eat in • Take Away • Delivery',
    items: [
      {
        id: '16',
        name: 'Burger Classique',
        description: '',
        prices: { 'Viande': 1500, 'Poulet': 2000 },
        category: 'Burgers',
      },
      {
        id: '17',
        name: 'Burger Classique Grand',
        description: '',
        prices: { 'Viande': 2500, 'Poulet': 3000 },
        category: 'Burgers',
      },
      {
        id: '18',
        name: 'Cheesy Burger',
        description: '',
        prices: { 'Viande': 3500, 'Poulet': 4000 },
        category: 'Burgers',
      },
      {
        id: '19',
        name: 'Double Cheesy Burger',
        description: 'Servi avec frites et boisson.',
        prices: { 'Viande': 4500, 'Poulet': 5000 },
        category: 'Burgers',
      },
    ],
  },
  {
    title: 'Shawarma',
    subtitle: 'Eat in • Take Away • Delivery',
    items: [
      {
        id: '20',
        name: 'Viande',
        description: '',
        prices: 1000,
        category: 'Shawarma',
      },
      {
        id: '21',
        name: 'Poulet',
        description: '',
        prices: 1500,
        category: 'Shawarma',
      },
      {
        id: '22',
        name: 'Viande Jambon',
        description: '',
        prices: 2000,
        category: 'Shawarma',
      },
      {
        id: '23',
        name: 'Viande Saucisson',
        description: '',
        prices: 2000,
        category: 'Shawarma',
      },
    ],
  },
  {
    title: 'Combo',
    subtitle: 'Eat in • Take Away • Delivery',
    items: [
      {
        id: '24',
        name: 'Bellingham',
        description: '1 pièce poulet pané, 1 burger, boisson.',
        prices: 4000,
        category: 'Combo',
      },
      {
        id: '25',
        name: 'CR7',
        description: '1 pizza moyenne au choix, 2 pièces poulet pané & frites, 2 boissons.',
        prices: 9000,
        category: 'Combo',
      },
      {
        id: '26',
        name: 'Benzema',
        description: '2 brochettes, 2 saucisses, 2 pièces poulet & frites.',
        prices: 5000,
        category: 'Combo',
      },
      {
        id: '27',
        name: 'Zidane',
        description: '3 brochettes, 2 saucisses, 2 pièces poulet pané & frites.',
        prices: 7000,
        category: 'Combo',
      },
      {
        id: '28',
        name: '4-4-2',
        description: '4 pièces poulet pané, 4 hot wings, frites et 2 boissons.',
        prices: 10000,
        category: 'Combo',
      },
    ],
  },
  {
    title: 'Suppléments',
    subtitle: 'Eat in • Take Away • Delivery',
    items: [
      {
        id: '29',
        name: 'Frite pomme',
        description: '',
        prices: 1000,
        category: 'Suppléments',
      },
      {
        id: '30',
        name: 'Légumes',
        description: '',
        prices: { 'Small': 500, 'Large': 1000 },
        category: 'Suppléments',
      },
      {
        id: '31',
        name: 'Fromage',
        description: '',
        prices: { 'Small': 1000, 'Large': 1500 },
        category: 'Suppléments',
      },
      {
        id: '32',
        name: 'Viande hachée',
        description: '',
        prices: { 'Small': 1000, 'Medium': 1500, 'Large': 2000 },
        category: 'Suppléments',
      },
      {
        id: '33',
        name: 'Saucisse',
        description: '',
        prices: { 'Small': 1000, 'Medium': 1500, 'Large': 2000 },
        category: 'Suppléments',
      },
      {
        id: '34',
        name: 'Bacon',
        description: '',
        prices: { 'Small': 1000, 'Medium': 1500, 'Large': 2000 },
        category: 'Suppléments',
      },
      {
        id: '35',
        name: 'Blanc poulet',
        description: '',
        prices: { 'Small': 1000, 'Medium': 1500, 'Large': 2000 },
        category: 'Suppléments',
      },
      {
        id: '36',
        name: 'Fromage Burger',
        description: '',
        prices: { 'Small': 1000, 'Medium': 1500, 'Large': 2000 },
        category: 'Suppléments',
      },
    ],
  },
  {
    title: 'Smoothies',
    subtitle: 'Eat in • Take Away • Delivery',
    items: [
      {
        id: '37',
        name: 'Vanille',
        description: '',
        prices: 1500,
        category: 'Smoothies',
      },
      {
        id: '38',
        name: 'Fraise',
        description: '',
        prices: 1500,
        category: 'Smoothies',
      },
      {
        id: '39',
        name: 'Choco',
        description: '',
        prices: 1500,
        category: 'Smoothies',
      },
      {
        id: '40',
        name: 'Cocktail (Oreo-Banane)',
        description: '',
        prices: 2000,
        category: 'Smoothies',
      },
    ],
  },
  {
    title: 'Glaces',
    subtitle: 'Eat in • Take Away • Delivery',
    items: [
      {
        id: '41',
        name: '1 Boule',
        description: '',
        prices: 1000,
        category: 'Glaces',
      },
      {
        id: '42',
        name: '3 Boules',
        description: '',
        prices: 2500,
        category: 'Glaces',
      },
    ],
  },
  {
    title: 'Nos Boissons',
    subtitle: 'Eat in • Take Away • Delivery',
    items: [
      {
        id: '43',
        name: 'Jus Granité',
        description: '',
        prices: { 'Small': 500, 'Large': 1000 },
        category: 'Nos Boissons',
      },
      {
        id: '44',
        name: 'Jus BIG',
        description: '',
        prices: 500,
        category: 'Nos Boissons',
      },
      {
        id: '45',
        name: 'Grands Jus Variés',
        description: '',
        prices: 1000,
        category: 'Nos Boissons',
      },
      {
        id: '46',
        name: 'Eau Minérale',
        description: '',
        prices: 500,
        category: 'Nos Boissons',
      },
      {
        id: '47',
        name: 'Bières',
        description: '',
        prices: 1000,
        category: 'Nos Boissons',
      },
      {
        id: '48',
        name: 'Heineken / Ekstra 100%',
        description: '',
        prices: 1500,
        category: 'Nos Boissons',
      },
      {
        id: '49',
        name: 'Energy Drink VOLT',
        description: '',
        prices: 1000,
        category: 'Nos Boissons',
      },
      {
        id: '50',
        name: 'Jus Naturel (Apon Kalina)',
        description: '',
        prices: 1000,
        category: 'Nos Boissons',
      },
      {
        id: '51',
        name: 'Jus Naturel Royal (500ml)',
        description: '',
        prices: 2000,
        category: 'Nos Boissons',
      },
    ],
  },
  {
    title: 'Vin & Whisky',
    subtitle: 'Eat in • Take Away • Delivery',
    items: [
      {
        id: '52',
        name: 'Vin',
        description: '',
        prices: { 'Small': 10000, 'Large': 15000 },
        category: 'Vin & Whisky',
      },
      {
        id: '53',
        name: 'Whisky',
        description: '',
        prices: { 'Small': 20000, 'Large': 40000 },
        category: 'Vin & Whisky',
      },
    ],
  },
]

export default function PizzaHotPage() {
  const { t } = useLanguage()
  const [cart, setCart] = useState<Record<string, number>>({})
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleQuantityChange = (id: string, quantity: number) => {
    setCart((prev) => {
      const newCart = { ...prev }
      if (quantity === 0) {
        delete newCart[id]
      } else {
        newCart[id] = quantity
      }
      return newCart
    })
  }

  const handleOrderNow = (id: string, name: string, prices: Record<string, number> | number) => {
    // Build a list of all selected variations with quantities
    const allItems = menuCategories.flatMap((cat) => cat.items)
    const item = allItems.find((m) => m.id === id)
    
    if (!item) return

    const selectedVariations: Array<{ label: string; price: number; quantity: number }> = []

    if (typeof item.prices === 'object') {
      // Multi-variant item - collect all selected sizes
      Object.entries(item.prices).forEach(([size, price]) => {
        const variationId = `${id}-${size}`
        const quantity = cart[variationId]
        if (quantity && quantity > 0) {
          selectedVariations.push({ label: size, price, quantity })
        }
      })
    } else {
      // Single price item
      const quantity = cart[id]
      if (quantity && quantity > 0) {
        selectedVariations.push({ label: '', price: item.prices, quantity })
      }
    }

    // If no variations selected, show message
    if (selectedVariations.length === 0) {
      alert('Please select at least one variation')
      return
    }

    // Build WhatsApp message with all selected variations
    const itemsList = selectedVariations
      .map(({ label, price, quantity }) => {
        const displayName = label ? `${name} (${label})` : name
        return `${displayName} x${quantity} - ${(price * quantity).toLocaleString()} XAF`
      })
      .join('\n')
    
    const total = selectedVariations.reduce((sum, v) => sum + v.price * v.quantity, 0)
    const message = `Hello Pizza Hot, I would like to order:\n\n${itemsList}\n\nTotal: ${total.toLocaleString()} XAF`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank')
  }

  // Flatten all items from categories for cart lookup
  const allItems = menuCategories.flatMap((cat) => cat.items)

  // Convert cart entries to items with variation information
  const cartItems = Object.entries(cart)
    .map(([cartId, quantity]) => {
      if (quantity === 0) return null

      // Check if this is a variation (e.g., "1-Moyenne")
      const [baseId, variation] = cartId.includes('-') 
        ? [cartId.substring(0, cartId.lastIndexOf('-')), cartId.substring(cartId.lastIndexOf('-') + 1)]
        : [cartId, null]

      const item = allItems.find((m) => m.id === baseId)
      if (!item) return null

      let displayName = item.name
      let price = 0

      if (variation && typeof item.prices === 'object') {
        // This is a multi-variant item
        price = item.prices[variation] || 0
        displayName = `${item.name} (${variation})`
      } else {
        // Single price item
        price = typeof item.prices === 'number' ? item.prices : 0
      }

      return { 
        id: cartId,
        name: displayName, 
        price, 
        quantity,
        originalItemId: baseId
      }
    })
    .filter(Boolean) as Array<{ id: string; name: string; price: number; quantity: number; originalItemId: string }>

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

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
        title={t('pizzaHot.title')}
        subtitle="Savourez des pizzas préparées avec soin, des burgers gourmands, du poulet croustillant et bien plus encore. Sur place, à emporter ou en livraison, Pizza Hot vous régale à chaque bouchée."
        image="/images/pizza-hot.png"
        imageAlt="Pizza Hot restaurant"
      />

      <main className="flex-1 pt-16">
        {/* Menu Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: 'rgb(215, 204, 50)' }}>{t('pizzaHot.menu')}</h2>

            {/* Menu Subtitle */}
            <p className="text-sm text-muted-foreground text-center mb-12">
              {t('pizzaHot.menuSubtitle')}
            </p>

            {/* Restaurant Menu */}
            <RestaurantMenu
              categories={menuCategories}
              cart={cart}
              onQuantityChange={handleQuantityChange}
              onOrderNow={handleOrderNow}
            />
          </div>
        </section>
      </main>

      {/* Cart Button (Mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-accent text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
        >
          <ShoppingCart size={24} />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <Footer />
    </div>
  )
}
