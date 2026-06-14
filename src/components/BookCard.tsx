import { Link } from 'react-router-dom'
import { ShoppingBag, Check, Star } from 'lucide-react'
import { useState } from 'react'
import { BookCover } from './BookCover'
import { useCart } from '@/lib/cart'
import type { Book } from '@/lib/data'

export function BookCard({ book }: { book: Book }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation()
    add({ id: book.id, slug: book.slug, title: book.title, price: Number(book.price), cover_url: book.cover_url, is_digital: book.is_digital })
    setAdded(true); setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link to={`/books/${book.slug}`} className="group flex flex-col">
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md shadow-soft bg-muted transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-elegant">
        <BookCover title={book.title} author={book.author} coverUrl={book.cover_url} />
        {book.coming_soon ? (
          <>
            <div className="absolute inset-0 backdrop-blur-[2px]" style={{ background: 'rgba(45,74,62,0.75)' }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Next from Moses</span>
              <span className="mt-3 font-serif text-2xl text-primary-foreground leading-tight">{book.title}</span>
              <div className="mt-4 h-px w-10 bg-gold" />
              <span className="mt-4 inline-block rounded-full border border-gold/60 px-3 py-1 text-[10px] uppercase tracking-widest text-gold">Coming soon</span>
            </div>
          </>
        ) : book.bestseller ? (
          <span className="absolute top-3 left-3 rounded-full bg-gold px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-foreground">Bestseller</span>
        ) : book.new_release ? (
          <span className="absolute top-3 left-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">New</span>
        ) : null}
      </div>
      <div className="mt-4 flex-1">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{book.category}</div>
        <h3 className="mt-1 font-serif text-lg leading-snug text-foreground group-hover:text-primary transition-colors">{book.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          {book.coming_soon
            ? <span className="text-xs font-semibold uppercase tracking-widest text-gold">Coming soon</span>
            : <span className="text-base font-semibold text-foreground">${Number(book.price).toFixed(2)}</span>
          }
          <span className="text-xs text-muted-foreground">{book.is_digital ? 'Digital' : 'Paperback'}</span>
        </div>
        {!book.coming_soon && (
          <button type="button" onClick={handleAdd}
            className="mt-3 inline-flex w-full h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-soft hover:opacity-90 transition-colors">
            {added ? <><Check className="h-4 w-4" /> Added</> : <><ShoppingBag className="h-4 w-4" /> Add to cart</>}
          </button>
        )}
      </div>
    </Link>
  )
}
