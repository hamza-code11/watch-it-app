import { ProductDetailData } from '../types/productDetail.types';

export const productDetailsData: ProductDetailData[] = [
  {
    id: 'prod-1',
    brandName: 'Rolex',
    title: 'Submariner Date',
    price: '7,103 AED',
    oldPrice: '8,500 AED',
    description:
      'The Rolex Submariner Date is an iconic dive watch that combines luxury with functionality. With its ceramic bezel, luminous markers, and waterproof design, it is the perfect companion for both underwater exploration and everyday wear.',
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
    ],
    rating: 4.9,
    reviews: 335,
    condition: 'New',
    year: 2024,
    seller: {
      name: 'Heritage Timepieces',
      rating: 4.9,
      reviews: 423,
      location: 'London, UK',
    },
    specifications: [
      { label: 'Case Size', value: '41mm' },
      { label: 'Movement', value: 'Automatic' },
      { label: 'Water Resistance', value: '300m' },
      { label: 'Material', value: 'Stainless Steel' },
      { label: 'Strap', value: 'Bracelet' },
      { label: 'Warranty', value: '5 Years' },
    ],
    customerReviews: [
      {
        id: 'rev-1',
        user: 'Ahmed R.',
        rating: 5,
        title: 'Perfect timepiece!',
        comment: 'Absolutely stunning watch! The craftsmanship is impeccable and it keeps perfect time. Highly recommend this seller!',
        date: 'Jun 15, 2024',
        helpfulCount: 24,
      },
      {
        id: 'rev-2',
        user: 'Sarah M.',
        rating: 5,
        title: 'Great watch, fast delivery',
        comment: 'The watch arrived in perfect condition. Exactly as described. Would buy from this vendor again.',
        date: 'Jun 10, 2024',
        helpfulCount: 18,
      },
      {
        id: 'rev-3',
        user: 'Omar K.',
        rating: 5,
        title: 'Best purchase ever',
        comment: 'This is my third Rolex and this one is by far my favorite. The seller was very professional and helpful.',
        date: 'Jun 5, 2024',
        helpfulCount: 16,
      },
    ],
  },
];
