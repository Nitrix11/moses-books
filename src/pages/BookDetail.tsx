import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ShoppingBag, Check, Star, ArrowLeft } from 'lucide-react'
import { getBook } from '@/lib/data'
import { BookCover } from '@/components/BookCover'
import { useCart } from '@/lib/cart'

export default function BookDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const book = getBook(slug!)
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-24 text-center max-w-7xl">
        <h1 className="font-serif text-3xl">Book not found</h1>
        <Link to="/books" className="mt-6 inline-block text-primary underline">Browse all books</Link>
      </div>
    )
  }

  const handleAdd = () => {
    add({ id: book.id, slug: book.slug, title: book.title, price: Number(book.price), cover_url: book.cover_url, is_digital: book.is_digital })
    setAdded(true); setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 md:py-16 max-w-7xl">
      <Link to="/books" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to all books
      </Link>
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        <div className="relative">
          <div className="relative aspect-[2/3] max-w-md mx-auto overflow-hidden rounded-md shadow-elegant">
            <BookCover title={book.title} author={book.author} coverUrl={book.cover_url} />
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{book.category}</span>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl">{book.title}</h1>
          <p className="mt-2 text-muted-foreground">by <span className="font-medium text-foreground">{book.author}</span></p>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
            <span className="text-xs text-muted-foreground">(124 reviews)</span>
          </div>
          <p className="mt-6 leading-relaxed" style={{ color: 'rgba(30,52,41,0.85)' }}>{book.description}</p>

          {book.coming_soon ? (
            <>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                <Star className="h-3.5 w-3.5 fill-current" /> Coming soon
              </div>
              <p className="mt-6" style={{ color: 'rgba(30,52,41,0.8)' }}>
                This title is being prepared for release. Join the reading circle on the home page to be the first to hear when pre-orders open.
              </p>
              <div className="mt-6">
                <Link to="/books" className="inline-flex h-12 items-center rounded-md border border-border bg-card px-6 text-sm font-semibold hover:border-primary">Browse available titles</Link>
              </div>
            </>
          ) : (
            <>
              <div className="mt-8 flex items-end gap-4">
                <span className="font-serif text-4xl font-semibold">${Number(book.price).toFixed(2)}</span>
                <span className="text-sm text-muted-foreground pb-1">{book.is_digital ? 'Digital download' : 'Paperback · ships in 2-3 days'}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={handleAdd}
                  className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition-all hover:-translate-y-0.5">
                  {added ? <><Check className="h-4 w-4" /> Added to cart</> : <><ShoppingBag className="h-4 w-4" /> Add to cart</>}
                </button>
                <Link to="/cart" className="inline-flex h-12 items-center rounded-md border border-border bg-card px-6 text-sm font-semibold hover:border-primary">View cart</Link>
              </div>
              <ul className="mt-10 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Check className="h-4 w-4 text-gold mt-0.5" /> Secure Paynow checkout (EcoCash, OneMoney, Visa, ZIPIT)</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-gold mt-0.5" /> {book.is_digital ? 'Instant download after payment' : 'Nationwide delivery across Zimbabwe'}</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-gold mt-0.5" /> Signed by the author on request</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
