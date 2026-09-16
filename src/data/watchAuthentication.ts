import { AuthenticationMethod } from '../types/watchAuthentication.types';

export const plansData: AuthenticationMethod[] = [
  {
    id: 'dropoff',
    number: '1',
    name: 'Drop Off',
    description:
      'Visit our location and drop off your watch for authentication. Our experts will inspect it and contact you once it\'s ready.',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=400&auto=format&fit=crop',
    features: [
      'No pickup fees',
      'Handled by our in-house experts',
      'Receive digital or physical certificate',
    ],
    buttonLabel: 'Book Drop Off',
    price: 'AED 150',
    duration: '/ one-time',
    time: '24 hours',
    icon: 'storefront-outline',
  },
  {
    id: 'pickup',
    number: '2',
    name: 'Pickup Service',
    description:
      'We\'ll send our insured driver to collect your watch from your preferred location. Authenticated & safe, and it will return to you with the certificate.',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=400&auto=format&fit=crop',
    features: [
      'Safe & insured transportation',
      'Real-time updates',
      'Digital or physical certificate',
    ],
    buttonLabel: 'Schedule a Pickup',
    price: 'AED 300',
    duration: '/ one-time',
    time: 'Same day',
    icon: 'car-outline',
  },
  {
    id: 'onsite',
    number: '3',
    name: 'On-Site Inspection',
    description:
      'Prefer not to hand over your watch? We\'ll send our expert watchmaker to your home or office for an on-site inspection and provide a certificate on the spot.',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=400&auto=format&fit=crop',
    features: [
      'Expert comes to your location',
      'On-site inspection',
      'Receive digital or printed certificate',
    ],
    buttonLabel: 'Book On-Site Inspection',
    price: 'AED 450',
    duration: '/ one-time',
    time: '48 hours',
    icon: 'search-outline',
  },
];
