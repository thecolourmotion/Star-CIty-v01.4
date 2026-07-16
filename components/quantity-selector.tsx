import { Plus, Minus } from 'lucide-react'

interface QuantitySelectorProps {
  quantity: number
  onQuantityChange: (quantity: number) => void
  size?: 'sm' | 'md'
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  size = 'sm',
}: QuantitySelectorProps) {
  const isSm = size === 'sm'

  return (
    <div className={`flex items-center gap-1 bg-muted rounded-full p-1 ${
      isSm ? 'w-fit' : ''
    }`}>
      <button
        onClick={() => onQuantityChange(Math.max(0, quantity - 1))}
        className={`p-1 hover:bg-border rounded-full transition-colors flex-shrink-0 ${
          isSm ? 'w-6 h-6' : 'w-8 h-8'
        } flex items-center justify-center`}
        aria-label="Decrease quantity"
      >
        <Minus size={isSm ? 12 : 14} />
      </button>
      <span className={`text-center font-medium ${
        isSm ? 'w-5 text-xs' : 'w-8 text-sm'
      }`}>
        {quantity}
      </span>
      <button
        onClick={() => onQuantityChange(quantity + 1)}
        className={`p-1 hover:bg-border rounded-full transition-colors flex-shrink-0 ${
          isSm ? 'w-6 h-6' : 'w-8 h-8'
        } flex items-center justify-center`}
        aria-label="Increase quantity"
      >
        <Plus size={isSm ? 12 : 14} />
      </button>
    </div>
  )
}
