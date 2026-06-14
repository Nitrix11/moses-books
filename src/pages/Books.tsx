import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { BookCard } from '@/components/BookCard'
import { BOOKS } from '@/lib/data'

const PAGE_SIZE = 8

export default function Books() {
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('all')
  const [format, setFormat] = useState<'all'|'digital'|'physical'>('all')
  const [page, setPage] = useState(1)

  const categories = useMemo(() => ['all', ...Array.from(new Set(BOOKS.map(b => b.category)))], [])

  const filtered = useMemo(() => BOOKS.filter(b => {
    if (category !== 'all' && b.category !== category) return false
    if (format === 'digital' && !b.is_digital) return false
    if (format === 'physical' && b.is_digital) return false
    if (q && !`${b.title} ${b.description}`.toLowerCase().includes(q.toLowerCase())) return false
    return true
  }), [q, category, format])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const paged = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 max-w-7xl">
      <header className="mb-10 text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The Collection</span>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl">All books</h1>
        <p className="mt-3 text-muted-foreground">From quiet meditations to vivid stories — find your next read.</p>
      </header>

      <div className="mb-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="relative md:max-w-sm w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={e => { setQ(e.target.value); setPage(1) }} placeholder="Search books..."
            className="h-11 w-full rounded-md border border-input bg-card pl-10 pr-3 text-sm outline-none focus:border-primary" />
        </div>
        <div className="flex flex-wrap gap-2">
          <select value={category} onChange={e => { setCategory(e.target.value); setPage(1) }}
            className="h-11 rounded-md border border-input bg-card px-3 text-sm capitalize">
            {categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All categories' : c}</option>)}
          </select>
          <select value={format} onChange={e => { setFormat(e.target.value as any); setPage(1) }}
            className="h-11 rounded-md border border-input bg-card px-3 text-sm">
            <option value="all">All formats</option>
            <option value="physical">Paperback</option>
            <option value="digital">Digital</option>
          </select>
        </div>
      </div>

      {paged.length === 0
        ? <p className="text-center text-muted-foreground py-20">No books match your filters.</p>
        : <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">{paged.map(b => <BookCard key={b.id} book={b} />)}</div>
      }

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => {
            const n = i + 1
            return (
              <button key={n} onClick={() => setPage(n)}
                className={`h-10 w-10 rounded-md border text-sm font-medium transition-colors ${n === safePage ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card hover:border-primary'}`}>
                {n}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
