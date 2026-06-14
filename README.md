# Moses Books Store

React + Vite + TypeScript + Tailwind CSS — full e-commerce bookstore.

## Run in Termux

```bash
cp /storage/emulated/0/DCIM/moses-books.zip ~/
cd ~/
unzip moses-books.zip
cd mosesbooks
npm install
npm run dev
```

Open http://localhost:5173

## Pages
- `/` — Home (hero, author profile, featured/bestseller/new books, testimonials, newsletter)
- `/books` — Browse with search, category & format filters + pagination
- `/books/:slug` — Book detail with add-to-cart
- `/about` — Author bio, stats, mission
- `/contact` — Contact form + WhatsApp link
- `/cart` — Cart with quantity controls
- `/checkout` — Paynow checkout form (EcoCash, OneMoney, Visa, ZIPIT)
- `/checkout/success` — Order confirmed page
- `/checkout/failed` — Payment failed page

## Deploy to Vercel
```bash
git init && git add . && git commit -m "Moses Books Store"
# push to GitHub then import on vercel.com
```
