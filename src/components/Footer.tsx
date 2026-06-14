import { Link } from 'react-router-dom'
import { BookOpen, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 max-w-7xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-gold text-gold-foreground"><BookOpen className="h-5 w-5" /></span>
            <span className="font-serif text-lg font-semibold">PathwayToWholeness.com</span>
          </div>
          <p className="mt-4 text-sm opacity-80 max-w-xs">Wisdom, stories, and quiet fire — bound in pages. Shipping across Zimbabwe and beyond.</p>
        </div>
        <div>
          <h4 className="font-serif text-base mb-4 text-gold">Shop</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/books" className="hover:text-gold transition-colors">All Books</Link></li>
            <li><Link to="/books" className="hover:text-gold transition-colors">Bestsellers</Link></li>
            <li><Link to="/books" className="hover:text-gold transition-colors">New Releases</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-base mb-4 text-gold">Company</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/about" className="hover:text-gold transition-colors">About Moses</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-base mb-4 text-gold">Connect</h4>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full hover:bg-gold hover:text-gold-foreground transition-colors" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs opacity-70">Payments by Paynow — EcoCash · OneMoney · Visa · Mastercard · ZIPIT</p>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="container mx-auto px-4 py-5 text-xs opacity-70 sm:px-6 max-w-7xl">
          © {new Date().getFullYear()} PathwayToWholeness.com. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
