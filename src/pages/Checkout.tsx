import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ShoppingBag, ArrowLeft, CreditCard, Lock } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { BookCover } from '@/components/BookCover'

type F = { name: string; email: string; phone: string; address: string; city: string; country: string; method: string }

function Field({ label, type = 'text', value, onChange, required, placeholder }: { label: string; type?: string; value: string; onChange: (v: string) => void; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}{required && <span className="text-destructive ml-0.5">*</span>}</label>
      <input type={type} required={required} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)}
        className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary" />
    </div>
  )
}

const PAYMENT_METHODS = [
  { id: 'ecocash',   label: 'EcoCash',    desc: 'Pay with your EcoCash wallet' },
  { id: 'onemoney', label: 'OneMoney',   desc: 'Pay with your OneMoney wallet' },
  { id: 'visa',     label: 'Visa / Mastercard', desc: 'Card payment via Paynow' },
  { id: 'zipit',    label: 'ZIPIT',      desc: 'Instant bank transfer' },
]

export default function Checkout() {
  const { items, subtotal, count, clear } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState<F>({ name: '', email: '', phone: '', address: '', city: '', country: 'Zimbabwe', method: 'ecocash' })
  const [loading, setLoading] = useState(false)

  const set = (k: keyof F) => (v: string) => setForm(f => ({ ...f, [k]: v }))

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center max-w-7xl">
        <ShoppingBag className="mx-auto h-14 w-14 text-muted-foreground/40" />
        <h1 className="mt-4 font-serif text-3xl">Your cart is empty</h1>
        <Link to="/books" className="mt-6 inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground">Browse books</Link>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate Paynow payment initiation
    await new Promise(r => setTimeout(r, 1800))
    // In production: call Paynow API here, redirect to payment URL
    // For now: show success
    clear()
    navigate('/checkout/success')
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 max-w-7xl">
      <Link to="/cart" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to cart
      </Link>
      <h1 className="font-serif text-3xl md:text-4xl mb-10">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {/* Form */}
        <div className="md:col-span-2 space-y-8">
          {/* Contact */}
          <section className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <h2 className="font-serif text-xl mb-5">Contact information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" required value={form.name} onChange={set('name')} />
              <Field label="Email" type="email" required value={form.email} onChange={set('email')} placeholder="you@example.com" />
              <Field label="Phone" type="tel" required value={form.phone} onChange={set('phone')} placeholder="+263 77 000 0000" />
            </div>
          </section>

          {/* Delivery */}
          {items.some(i => !i.is_digital) && (
            <section className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <h2 className="font-serif text-xl mb-5">Delivery address</h2>
              <div className="space-y-4">
                <Field label="Street address" required value={form.address} onChange={set('address')} />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="City / Town" required value={form.city} onChange={set('city')} />
                  <Field label="Country" required value={form.country} onChange={set('country')} />
                </div>
              </div>
            </section>
          )}

          {/* Payment */}
          <section className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <h2 className="font-serif text-xl mb-5 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-muted-foreground" /> Payment method
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {PAYMENT_METHODS.map(m => (
                <label key={m.id}
                  className={`flex cursor-pointer gap-3 rounded-lg border-2 p-4 transition-colors ${form.method === m.id ? 'border-primary bg-accent' : 'border-border hover:border-primary/50'}`}>
                  <input type="radio" name="method" value={m.id} checked={form.method === m.id} onChange={() => setForm(f => ({ ...f, method: m.id }))} className="accent-primary mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold">{m.label}</div>
                    <div className="text-xs text-muted-foreground">{m.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </section>
        </div>

        {/* Order summary */}
        <div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft sticky top-24">
            <h2 className="font-serif text-xl mb-5">Order summary</h2>
            <div className="space-y-3">
              {items.map(item => (
                <div key={item.id} className="flex gap-3">
                  <div className="relative w-12 shrink-0 aspect-[2/3] rounded overflow-hidden">
                    <BookCover title={item.title} coverUrl={item.cover_url} />
                  </div>
                  <div className="flex-1 text-sm">
                    <div className="font-medium leading-snug">{item.title}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">Qty: {item.quantity}</div>
                    <div className="font-semibold mt-1">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-border pt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="text-muted-foreground">Calculated next</span></div>
              <div className="flex justify-between font-bold text-base border-t border-border pt-3 mt-3"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
            </div>
            <button type="submit" disabled={loading}
              className="mt-6 inline-flex w-full h-12 items-center justify-center gap-2 rounded-md bg-gold text-sm font-semibold text-gold-foreground shadow-soft hover:opacity-95 disabled:opacity-60">
              {loading ? 'Processing…' : <><Lock className="h-4 w-4" /> Pay with Paynow</>}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">Secured by Paynow · 256-bit SSL</p>
          </div>
        </div>
      </form>
    </div>
  )
}
