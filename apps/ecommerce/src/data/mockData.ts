export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  rating: number;
  reviewsCount: number;
  stock: number;
  isFeatured?: boolean;
  isFlashSale?: boolean;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Electronics', icon: 'Cpu', slug: 'electronics' },
  { id: '2', name: 'Fashion', icon: 'Shirt', slug: 'fashion' },
  { id: '3', name: 'Home & Living', icon: 'Home', slug: 'home-living' },
  { id: '4', name: 'Gaming', icon: 'Gamepad2', slug: 'gaming' },
  { id: '5', name: 'Accessories', icon: 'Watch', slug: 'accessories' },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Nebula Pro Gaming Headset',
    description: 'Immersive 7.1 surround sound gaming headset with RGB lighting and noise-canceling mic.',
    price: 129.99,
    category: 'Gaming',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000'],
    rating: 4.8,
    reviewsCount: 124,
    stock: 15,
    isFeatured: true,
    isFlashSale: true,
    discount: 20,
  },
  {
    id: 'p2',
    name: 'Minimalist Wood Desk Lamp',
    description: 'Modern aesthetic desk lamp with touch controls and adjustable brightness.',
    price: 79.50,
    category: 'Home & Living',
    images: ['https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1000'],
    rating: 4.5,
    reviewsCount: 86,
    stock: 25,
    isFeatured: true,
  },
  {
    id: 'p3',
    name: 'Chronos Silver Watch',
    description: 'Elegant stainless steel timepiece with sapphire crystal and Japanese movement.',
    price: 249.00,
    category: 'Accessories',
    images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000'],
    rating: 4.9,
    reviewsCount: 52,
    stock: 10,
    isFeatured: true,
  },
  {
    id: 'p4',
    name: 'Apex Wireless Mouse',
    description: 'Ultra-lightweight wireless gaming mouse with 26K DPI sensor.',
    price: 89.99,
    category: 'Gaming',
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000'],
    rating: 4.7,
    reviewsCount: 210,
    stock: 50,
    isFlashSale: true,
    discount: 15,
  },
  {
    id: 'p5',
    name: 'Urban Explorer Backpack',
    description: 'Water-resistant laptop backpack with USB charging port and anti-theft design.',
    price: 65.00,
    category: 'Fashion',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000'],
    rating: 4.6,
    reviewsCount: 145,
    stock: 30,
  },
  {
    id: 'p6',
    name: 'Zenith Noise Cancelling Buds',
    description: 'Active noise cancelling wireless earbuds with 30 hours battery life.',
    price: 159.99,
    category: 'Electronics',
    images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000'],
    rating: 4.8,
    reviewsCount: 98,
    stock: 20,
    isFeatured: true,
  }
];
