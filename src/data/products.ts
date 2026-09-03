import { Product } from '../types/product.types';

export const productsData: Product[] = [
  {
    id: 'prod-1',
    brandName: 'Rolex',
    title: 'Submariner Date',
    sellerName: 'Time Vault Karachi',
    price: '7,103 AED',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
    rating: 335,
    condition: 'New',
    year: 2024,
  },
  {
    id: 'prod-2',
    brandName: 'Rolex',
    title: 'Nautilus',
    sellerName: 'Heritage Timepieces',
    price: '24,795 AED',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
    rating: 252,
    condition: 'Pre-Owned',
    year: 2021,
  },
  // ... aur products
];
