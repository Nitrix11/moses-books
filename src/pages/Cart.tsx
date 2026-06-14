import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { BookCover } from '@/components/BookCover'

export default function Cart() {
  const { items, remove, setQuantity, subtotal, count, clear } = useCart()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-24 text-center max-w-7xl">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground/40" />
        <h1 className="mt-5 font-serif text-3xl">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Browse the collection and find your next great read.</p>
        <Link to="/books" className="mt-7 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90">
          Browse books <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl md:text-4xl">Your cart <span className="text-muted-foreground text-xl font-normal">({count} item{count !== 1 ? 's' : ''})</span></h1>
        <button onClick={clear} className="text-xs text-muted-foreground hover:text-destructive underline underline-offset-2">Clear all</button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {/* Items */}
        <div className="md:col-span-2 space-y-5">
          {items.map(item => (
            <div key={item.id} className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-soft">
              <Link to={`/books/${item.slug}`} className="relative w-20 shrink-0 overflow-hidden rounded-md aspect-[2/3]">
                <BookCover title={item.title} coverUrl={item.cover_url} />
              </Link>
              <div className="flex flex-1 flex-col gap-1">
                <Link to={`/books/${item.slug}`} className="font-serif text-lg leading-tight hover:text-primary">{item.title}</Link>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{item.is_digital ? 'Digital download' : 'Paperback'}</span>
                <div className="mt-auto flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center border border-border rounded-md">
                    <button onClick={() => setQuantity(item.id, item.quantity - 1)} className="h-8 w-8 grid place-items-center hover:bg-muted transition-colors">
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => setQuantity(item.id, item.quantity + 1)} className="h-8 w-8 grid place-items-center hover:bg-muted transition-colors">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    <button onClick={() => remove(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft sticky top-24">
            <h2 className="font-serif text-xl mb-5">Order summary</h2>
            <div className="space-y-2 text-sm">
              {items.map(item => (
                <div key={item.id} className="flex justify-between gap-4">
                  <span className="text-muted-foreground truncate">{item.title} × {item.quantity}</span>
                  <span className="font-medium shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="my-4 border-t border-border" />
              <div className="flex justify-between font-semibold text-base">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Shipping calculated at checkout</p>
            </div>
            <Link to="/checkout"
              className="mt-6 inline-flex w-full h-12 items-center justify-center gap-2 rounded-md bg-gold text-sm font-semibold text-gold-foreground shadow-soft hover:opacity-95 transition-all">
              Proceed to checkout <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-4 text-center text-xs text-muted-foreground">
              Secure payment via Paynow<br />
              EcoCash · OneMoney · Visa · Mastercard · ZIPIT
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
