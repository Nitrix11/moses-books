import mosesPortrait from '@/assets/moses-portrait.jpg'

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 text-center shadow-soft">
      <div className="font-serif text-4xl text-primary">{number}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 max-w-7xl">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <img src={mosesPortrait} alt="Moses Munamato Kundhlande" loading="lazy"
            className="rounded-md shadow-elegant aspect-[4/5] object-cover w-full" />
        </div>
        <div className="md:col-span-3">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About the author</span>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl">A life spent listening, a hand trained to write.</h1>
          <div className="mt-6 space-y-4 leading-relaxed" style={{ color: 'rgba(30,52,41,0.85)' }}>
            <p>Moses Munamato Kundhlande is a Pastor, certified counsellor, educator and writer with over twenty years of experience. He serves as a District Pastor in the East Zimbabwe Conference and is the founder of Tefilot Counseling Services.</p>
            <p>Born in the rolling hills of Mashonaland, Moses studied and has since spent two decades writing across the borders of memoir, fiction, poetry and faith. His work speaks directly to those walking through life's hardest seasons.</p>
            <p className="font-serif text-xl text-primary italic">"To write is to listen so carefully that the world hands you its secrets."</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <Stat number="2" label="Books published" />
            <Stat number="1k+" label="Copies sold" />
            <Stat number="20+" label="Years serving" />
          </div>
          <div className="mt-12">
            <h2 className="font-serif text-2xl">Mission</h2>
            <p className="mt-3 leading-relaxed" style={{ color: 'rgba(30,52,41,0.85)' }}>
              To put thoughtful, beautifully crafted books into the hands of readers — and to remind the world that wisdom has many accents. Through Tefilot Counseling Services, Moses continues to walk with people toward healing, hope and purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
