import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'

const WHATSAPP = '263780000000'

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-soft hover:border-primary transition-colors">
      <div className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-0.5 font-medium">{value}</div>
      </div>
    </div>
  )
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner
}

function Field({ label, type = 'text', value, onChange, required }: { label: string; type?: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input type={type} required={required} maxLength={200} value={value} onChange={e => onChange(e.target.value)}
        className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary" />
    </div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 max-w-7xl">
      <header className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Get in touch</span>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl">We'd love to hear from you</h1>
        <p className="mt-3 text-muted-foreground">For orders, signings, interviews and partnership inquiries.</p>
      </header>

      <div className="mt-14 grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" value="hello@mosesbooks.co.zw" href="mailto:hello@mosesbooks.co.zw" />
          <ContactCard icon={<Phone className="h-5 w-5" />} label="Phone" value="+263 78 000 0000" href="tel:+263780000000" />
          <ContactCard
            icon={<MessageCircle className="h-5 w-5" />}
            label="WhatsApp"
            value="Chat with us"
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi PathwayToWholeness, I'd like to ask about...")}`}
          />
          <ContactCard icon={<MapPin className="h-5 w-5" />} label="Address" value="Harare, Zimbabwe" />
        </div>

        <form onSubmit={e => { e.preventDefault(); setSent(true) }}
          className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-soft space-y-4">
          <h2 className="font-serif text-2xl">Send a message</h2>
          {sent ? (
            <p className="rounded-md bg-accent p-4 text-sm">Thanks {form.name || 'friend'} — we'll be back to you within 1-2 business days.</p>
          ) : (
            <>
              <Field label="Your name" required value={form.name} onChange={v => setForm({ ...form, name: v })} />
              <Field label="Email" type="email" required value={form.email} onChange={v => setForm({ ...form, email: v })} />
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea required maxLength={1000} rows={5} value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
              </div>
              <button className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:opacity-90">
                <Send className="h-4 w-4" /> Send message
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  )
}
