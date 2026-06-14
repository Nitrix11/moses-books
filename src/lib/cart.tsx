import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type CartItem = {
  id: string; slug: string; title: string; price: number;
  cover_url: string | null; is_digital: boolean; quantity: number;
};

type CartCtx = {
  items: CartItem[]; add: (item: Omit<CartItem, 'quantity'>, qty?: number) => void;
  remove: (id: string) => void; setQuantity: (id: string, qty: number) => void;
  clear: () => void; subtotal: number; count: number;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = 'moses-books-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try { const r = localStorage.getItem(KEY); if (r) setItems(JSON.parse(r)); } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => { if (hydrated) localStorage.setItem(KEY, JSON.stringify(items)); }, [items, hydrated]);

  const add = (item: Omit<CartItem, 'quantity'>, qty = 1) =>
    setItems(p => {
      const ex = p.find(i => i.id === item.id);
      return ex ? p.map(i => i.id === item.id ? { ...i, quantity: i.quantity + qty } : i) : [...p, { ...item, quantity: qty }];
    });

  const remove = (id: string) => setItems(p => p.filter(i => i.id !== id));
  const setQuantity = (id: string, qty: number) => { if (qty <= 0) return remove(id); setItems(p => p.map(i => i.id === id ? { ...i, quantity: qty } : i)); };
  const clear = () => setItems([]);
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return <Ctx.Provider value={{ items, add, remove, setQuantity, clear, subtotal, count }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
