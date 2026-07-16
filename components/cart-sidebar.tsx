'use client'

import { X, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartSidebarProps {
  items: CartItem[]
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ items, isOpen, onClose }: CartSidebarProps) {
  const { t } = useLanguage()
  
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const handleWhatsApp = () => {
    const itemsList = items
      .map((item) => `${item.name} x${item.quantity} - ${(item.price * item.quantity).toLocaleString()} XAF`)
      .join('\n')
    const message = `Hi! I'd like to order:\n\n${itemsList}\n\nTotal: ${total.toLocaleString()} XAF`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank')
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 h-screen bg-card border-l border-border shadow-lg z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-[90%] md:w-96 md:relative md:translate-x-0 md:h-auto md:w-full md:border-l-0 md:border-t md:shadow-none md:fixed md:right-0 md:top-auto md:bottom-0 md:w-80`}
        style={isOpen ? { left: '5%' } : {}}
      >
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h2 className="text-2xl font-bold">{t('buttons.orderNow')}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>{t('cart.empty')}</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        x{item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold">
                      {(item.price * item.quantity).toLocaleString()} XAF
                    </p>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">{t('cart.total')}:</span>
                  <span className="text-2xl font-bold text-accent">
                    {total.toLocaleString()} XAF
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  {itemCount} {itemCount === 1 ? t('cart.quantity') : t('cart.quantity')}s
                </p>
              </div>

              {/* WhatsApp Button */}
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
              >
                <MessageCircle size={20} />
                {t('buttons.orderOnWhatsApp')}
              </Button>
            </>
          )}
        </div>
      </aside>
    </>
  )
}
