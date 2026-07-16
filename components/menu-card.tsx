'use client'

import { Plus, Minus, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'

interface MenuCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
  quantity: number
  onQuantityChange: (id: string, quantity: number) => void
  onOrderNow?: (id: string, name: string, price: number) => void
}

export function MenuCard({
  id,
  name,
  description,
  price,
  image,
  quantity,
  onQuantityChange,
  onOrderNow,
}: MenuCardProps) {
  const { t } = useLanguage()

  const handleOrderNow = () => {
    if (onOrderNow) {
      onOrderNow(id, name, price)
    }
  }

  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="aspect-video bg-muted relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1">{description}</p>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-accent">{price.toLocaleString()} XAF</span>
            <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
              <button
                onClick={() =>
                  onQuantityChange(id, Math.max(0, quantity - 1))
                }
                className="p-1 hover:bg-border rounded transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <button
                onClick={() => onQuantityChange(id, quantity + 1)}
                className="p-1 hover:bg-border rounded transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          <Button
            onClick={handleOrderNow}
            className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
            size="sm"
          >
            <MessageCircle size={16} />
            {t('buttons.orderNow')}
          </Button>
        </div>
      </div>
    </div>
  )
}
