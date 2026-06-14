import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, Home } from 'lucide-react'

export default function CheckoutSuccess() {
  return (
    <div className="container mx-auto px-4 py-28 text-center max-w-xl">
      <div className="grid h-20 w-20 mx-auto place-items-center rounded-full bg-primary/10">
        <CheckCircle className="h-10 w-10 text-primary" />
      </div>
      <h1 className="mt-6 font-serif text-4xl">Order confirmed!</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Thank you for your purchase. A confirmation email is on its way. For digital books, your download link will arrive within minutes.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/books" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90">
          <BookOpen className="h-4 w-4" /> Keep reading
        </Link>
        <Link to="/" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border px-6 text-sm font-semibold hover:border-primary">
          <Home className="h-4 w-4" /> Home
        </Link>
      </div>
    </div>
  )
}
