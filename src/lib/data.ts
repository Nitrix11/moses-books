export type Book = {
  id: string; slug: string; title: string; author: string;
  description: string; category: string; price: number;
  cover_url: string | null; is_digital: boolean;
  featured: boolean; bestseller: boolean; new_release: boolean;
  stock: number; coming_soon: boolean;
};

// CDN URLs from the Lovable project assets
const CDN = 'https://book-haven-paynow.lovable.app/__l5e/assets-v1';

export const BOOKS: Book[] = [
  {
    id: '1', slug: 'smiling-outside',
    title: 'Smiling Outside', author: 'Moses Munamato Kundhlande',
    description: 'A profound exploration of joy, resilience and the hidden stories behind the smiles we present to the world. Moses draws on two decades of counselling experience to illuminate the tension between outward expression and inward struggle — and how we can bridge the two with grace and authenticity.',
    category: 'Faith & Healing', price: 12.99,
    cover_url: `${CDN}/cb5ec2c1-6ba6-4af6-a445-0e702b8783c9/smiling-outside-cover.jpg`,
    is_digital: false, featured: true, bestseller: true, new_release: false, stock: 50, coming_soon: false,
  },
  {
    id: '2', slug: 'divine-edge',
    title: 'Divine Edge', author: 'Moses Munamato Kundhlande',
    description: 'Standing at the intersection of faith and human experience, Divine Edge invites readers to discover the sharpness of purpose that comes from aligning your life with something greater than yourself. A devotional memoir written with pastoral warmth and prophetic clarity.',
    category: 'Faith & Healing', price: 14.99,
    cover_url: `${CDN}/cefeeaaf-cbda-4e3c-a4ae-8e0876aa4792/divine-edge-cover.jpg`,
    is_digital: false, featured: true, bestseller: false, new_release: true, stock: 40, coming_soon: false,
  },
  {
    id: '3', slug: 'smiling-outside-digital',
    title: 'Smiling Outside (Digital)', author: 'Moses Munamato Kundhlande',
    description: 'The digital edition of the beloved title — instant download, read anywhere. A profound exploration of joy, resilience and the hidden stories behind the smiles we present to the world.',
    category: 'Faith & Healing', price: 7.99,
    cover_url: `${CDN}/6068cb39-5114-4d21-a4ce-53006fcf07e2/smiling-outside-3d.jpg`,
    is_digital: true, featured: false, bestseller: true, new_release: false, stock: 999, coming_soon: false,
  },
  {
    id: '4', slug: 'divine-edge-digital',
    title: 'Divine Edge (Digital)', author: 'Moses Munamato Kundhlande',
    description: 'The digital edition of Divine Edge — instant download. Standing at the intersection of faith and human experience, this book invites readers to discover the sharpness of purpose.',
    category: 'Faith & Healing', price: 9.99,
    cover_url: `${CDN}/7ee34c22-c23b-4873-8a7c-d00b88aba303/divine-edge-3d.jpg`,
    is_digital: true, featured: false, bestseller: false, new_release: true, stock: 999, coming_soon: false,
  },
  {
    id: '5', slug: 'roots-of-zimbabwe',
    title: 'Roots of Zimbabwe', author: 'Moses Munamato Kundhlande',
    description: 'A lyrical journey through the landscapes, stories and souls of Zimbabwe. Part memoir, part cultural history, Roots of Zimbabwe is Moses at his most personal — writing about the land that shaped him and the people who made him who he is.',
    category: 'Memoir', price: 13.99,
    cover_url: null, is_digital: false, featured: true, bestseller: true, new_release: false, stock: 30, coming_soon: false,
  },
  {
    id: '6', slug: 'the-quiet-fire',
    title: 'The Quiet Fire', author: 'Moses Munamato Kundhlande',
    description: 'In a world that rewards the loudest voices, The Quiet Fire is a meditation on the power of stillness, patience and conviction. Moses writes about the slow burn of purpose and how the most lasting flames are often the quietest ones.',
    category: 'Inspiration', price: 11.99,
    cover_url: null, is_digital: false, featured: false, bestseller: true, new_release: false, stock: 25, coming_soon: false,
  },
  {
    id: '7', slug: 'letters-to-the-broken',
    title: 'Letters to the Broken', author: 'Moses Munamato Kundhlande',
    description: 'Written in the intimate form of letters, this collection speaks directly to those who are hurting, lost or uncertain. Each letter is a counselling session on the page — honest, healing and full of hard-won hope.',
    category: 'Counselling', price: 10.99,
    cover_url: null, is_digital: false, featured: false, bestseller: false, new_release: true, stock: 45, coming_soon: false,
  },
  {
    id: '8', slug: 'seasons-of-grace',
    title: 'Seasons of Grace', author: 'Moses Munamato Kundhlande',
    description: 'A devotional for the full calendar of life — joy, grief, growth and renewal. Moses writes from the pulpit and the counselling room, weaving together scripture, story and practical wisdom for every season you face.',
    category: 'Devotional', price: 9.99,
    cover_url: null, is_digital: false, featured: false, bestseller: false, new_release: false, stock: 60, coming_soon: true,
  },
];

export function getBook(slug: string): Book | undefined {
  return BOOKS.find(b => b.slug === slug);
}
