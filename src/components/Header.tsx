import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, BookOpen, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/lib/cart'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/books', label: 'Books' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

export default function Header() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border" style={{ background: 'rgba(250,248,244,0.9)', backdropFilter: 'blur(16px)' }}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 max-w-7xl">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <BookOpen className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-primary">PathwayToWholeness</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">.com</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map(n => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'}
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/cart" className="relative inline-flex h-10 items-center gap-2 rounded-md border border-border bg-card px-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors">
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[11px] font-bold text-gold-foreground">{count}</span>
            )}
          </Link>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col px-4 py-3 max-w-7xl">
            {nav.map(n => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-sm font-medium border-b border-border last:border-0">{n.label}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
