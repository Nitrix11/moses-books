import { Link } from 'react-router-dom'
import { XCircle, ShoppingBag, RefreshCw } from 'lucide-react'

export default function CheckoutFailed() {
  return (
    <div className="container mx-auto px-4 py-28 text-center max-w-xl">
      <div className="grid h-20 w-20 mx-auto place-items-center rounded-full bg-destructive/10">
        <XCircle className="h-10 w-10 text-destructive" />
      </div>
      <h1 className="mt-6 font-serif text-4xl">Payment failed</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Something went wrong with your payment. Your cart has been saved — please try again or contact us if the issue persists.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/checkout" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90">
          <RefreshCw className="h-4 w-4" /> Try again
        </Link>
        <Link to="/cart" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border px-6 text-sm font-semibold hover:border-primary">
          <ShoppingBag className="h-4 w-4" /> View cart
        </Link>
      </div>
    </div>
  )
}
