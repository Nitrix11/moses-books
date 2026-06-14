import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Sparkles, BookOpen, Star, Quote } from 'lucide-react'
import { BookCard } from '@/components/BookCard'
import { BookCover } from '@/components/BookCover'
import { BOOKS } from '@/lib/data'
import heroImage from '@/assets/hero-books.jpg'
import mosesPortrait from '@/assets/moses-portrait.jpg'
import { useState } from 'react'

const CDN = 'https://book-haven-paynow.lovable.app/__l5e/assets-v1'
const MOSES_AUTHOR_URL = `${CDN}/f9c830f7-7697-4c56-94af-1fa62af5b63b/moses-author.jpg`

const TESTIMONIALS = [
  { quote: 'Moses writes with the patience of a sage and the urgency of a friend. Every page earned a pause.', name: 'Tariro M.', role: 'Harare' },
  { quote: 'Roots of Zimbabwe changed how I tell my children about where we come from. A treasure.', name: 'Kudzai N.', role: 'Bulawayo' },
  { quote: 'I read The Quiet Fire on a single Sunday and reordered my whole month around it.', name: 'Lisa O.', role: 'Cape Town' },
]

export default function Home() {
  const featured = BOOKS.filter(b => b.featured).slice(0, 4)
  const bestsellers = BOOKS.filter(b => b.bestseller).slice(0, 4)
  const newReleases = BOOKS.filter(b => b.new_release).slice(0, 4)
  const [email, setEmail] = useState('')

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(45,74,62,0.97) 0%, rgba(45,74,62,0.85) 55%, rgba(45,74,62,0.5) 100%)' }} />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 py-24 md:py-36 text-primary-foreground max-w-7xl">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gold" style={{ background: 'rgba(249,246,240,0.05)', backdropFilter: 'blur(8px)' }}>
              <Sparkles className="h-3 w-3" /> Ministry of healing & transformation
            </span>
            <h1 className="mt-5 font-serif text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05]">
              Welcome to<br /><span className="text-gold italic">Pathway to Wholeness</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: 'rgba(249,246,240,0.85)' }}>
              In a world filled with brokenness and pain, there is hope for healing, restoration, and growth. A place dedicated to helping individuals, couples, families, and communities discover God's plan for complete well-being.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/books" className="inline-flex h-12 items-center gap-2 rounded-md bg-gold px-6 text-sm font-semibold text-gold-foreground shadow-elegant hover:opacity-95 transition-all hover:-translate-y-0.5">
                Explore resources <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex h-12 items-center rounded-md border px-6 text-sm font-semibold text-primary-foreground hover:opacity-80" style={{ borderColor: 'rgba(249,246,240,0.3)' }}>
                Meet Moses
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-widest" style={{ color: 'rgba(249,246,240,0.7)' }}>
              <span>EcoCash</span><span>·</span><span>OneMoney</span><span>·</span><span>Visa</span><span>·</span><span>ZIPIT</span>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME INTRODUCTION */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        {/* decorative grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(201,151,58,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(201,151,58,0.3) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #c9973a, transparent)' }} />
        <div className="relative container mx-auto px-4 sm:px-6 py-20 md:py-28 max-w-5xl text-center">
          {/* Scripture badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold mb-8" style={{ background: 'rgba(201,151,58,0.08)' }}>
            <BookOpen className="h-3 w-3" /> Ministry · Healing · Transformation
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Pathway to Wholeness
          </h2>
          <div className="mt-3 h-px w-16 bg-gold mx-auto" />

          <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed text-left md:text-center" style={{ color: 'rgba(249,246,240,0.85)' }}>
            <p>
              Pathway to Wholeness is more than a website — it is a <span className="text-gold font-semibold">ministry of healing, education, counseling, and transformation</span>. Through books, articles, counseling services, training resources, and practical life guidance, we seek to nurture the whole person: mind, body, relationships, and spirit.
            </p>
            <p>
              Whether you are seeking wisdom for relationships, guidance for marriage, emotional healing, youth mentorship, personal growth, spiritual renewal, or family enrichment — you will find resources designed to inspire hope and equip you for life's journey.
            </p>
            <p>
              Our mission is to help people move <span className="text-gold font-semibold">from brokenness to restoration</span>, from confusion to clarity, and from merely surviving to thriving through biblical principles, practical counseling, and Christ-centered living.
            </p>
            <p>
              We believe that true wholeness is found when faith, purpose, healthy relationships, and personal growth come together under the guidance of God. Every book, counseling session, and resource offered here is designed to help you take meaningful steps toward that goal.
            </p>
          </div>

          {/* Tagline pillars */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {['Healing', 'Growth', 'Restoration', 'Wholeness'].map((word, i) => (
              <span key={word} className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2 text-sm font-semibold text-gold" style={{ background: 'rgba(201,151,58,0.08)' }}>
                {i > 0 && <span className="w-1 h-1 rounded-full bg-gold/60" />}
                {word}
              </span>
            ))}
          </div>

          {/* Scripture quote */}
          <figure className="mt-12 mx-auto max-w-2xl rounded-2xl border border-gold/25 p-7 md:p-10" style={{ background: 'rgba(201,151,58,0.07)' }}>
            <Quote className="h-7 w-7 text-gold mx-auto mb-4" />
            <blockquote className="font-serif text-xl md:text-2xl italic leading-relaxed" style={{ color: 'rgba(249,246,240,0.95)' }}>
              "I have come that they may have life, and that they may have it more abundantly."
            </blockquote>
            <figcaption className="mt-4 text-sm text-gold font-semibold tracking-wider uppercase">— John 10:10</figcaption>
          </figure>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/books" className="inline-flex h-12 items-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-gold-foreground hover:opacity-95 transition-all hover:-translate-y-0.5">
              Explore books &amp; resources <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex h-12 items-center rounded-md border border-gold/40 px-7 text-sm font-semibold text-primary-foreground hover:border-gold transition-colors">
              Begin your journey
            </Link>
          </div>
        </div>
      </section>

      {/* AUTHOR PROFILE */}
      <section className="container mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center max-w-7xl">
        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 gradient-gold rounded-md opacity-30 blur-2xl" />
          <img
            src={MOSES_AUTHOR_URL}
            alt="Moses Munamato Kundhlande"
            loading="lazy"
            className="relative rounded-md shadow-elegant object-cover aspect-[4/5] w-full"
            onError={e => { (e.target as HTMLImageElement).src = mosesPortrait }}
          />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The Author</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Moses Munamato Kundhlande</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Pastor, certified counsellor, educator and writer with over twenty years of experience walking with people through life's hardest seasons. Moses serves as a District Pastor in the East Zimbabwe Conference and is the founder of Tefilot Counseling Services — a platform dedicated to guidance, healing and practical hope.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors">
            Read his story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FEATURED */}
      <Section title="Featured books" subtitle="Hand-picked by Moses himself">
        <Grid books={featured} />
      </Section>

      {/* BESTSELLERS */}
      <Section title="Bestsellers" subtitle="Loved by thousands of readers" eyebrow="Top of the shelf">
        <Grid books={bestsellers} />
      </Section>

      {/* TESTIMONIALS */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <Quote className="h-8 w-8 mx-auto text-gold" />
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">What readers say</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="rounded-lg border p-7" style={{ borderColor: 'rgba(249,246,240,0.1)', background: 'rgba(249,246,240,0.05)', backdropFilter: 'blur(8px)' }}>
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 font-serif text-lg italic leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="opacity-70 text-xs uppercase tracking-widest">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* NEW RELEASES */}
      <Section title="New releases" subtitle="Fresh off the press" eyebrow="Just arrived">
        <Grid books={newReleases} />
      </Section>

      {/* NEWSLETTER */}
      <section className="container mx-auto px-4 sm:px-6 pb-24 max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl gradient-hero p-10 md:p-16 text-center text-primary-foreground shadow-elegant">
          <BookOpen className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Join the reading circle</h2>
          <p className="mt-3 max-w-lg mx-auto" style={{ color: 'rgba(249,246,240,0.8)' }}>
            Be first to hear about new releases, author notes and members-only discounts.
          </p>
          <form className="mt-7 mx-auto flex max-w-md flex-col sm:flex-row gap-2"
            onSubmit={e => { e.preventDefault(); alert("Thanks for subscribing! We'll be in touch."); setEmail('') }}>
            <label className="sr-only" htmlFor="newsletter-email">Email</label>
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: 'rgba(249,246,240,0.6)' }} />
              <input
                id="newsletter-email" type="email" required value={email}
                onChange={e => setEmail(e.target.value)} placeholder="you@example.com"
                className="h-12 w-full rounded-md border pl-10 pr-3 text-sm outline-none"
                style={{ background: 'rgba(249,246,240,0.05)', borderColor: 'rgba(249,246,240,0.2)', color: '#f9f6f0' }}
              />
            </div>
            <button className="h-12 rounded-md bg-gold px-6 text-sm font-semibold text-gold-foreground hover:opacity-95">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  )
}

function Section({ title, subtitle, eyebrow, children }: { title: string; subtitle?: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 md:py-20 max-w-7xl">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          {eyebrow && <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</span>}
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
        </div>
        <Link to="/books" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors">
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      {children}
    </section>
  )
}

function Grid({ books }: { books: ReturnType<typeof BOOKS.filter> }) {
  if (books.length === 0) return <p className="text-muted-foreground">Nothing here yet — check back soon.</p>
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {books.map(b => <BookCard key={b.id} book={b} />)}
    </div>
  )
}
