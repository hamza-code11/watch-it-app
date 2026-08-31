import { WatchService } from '../types/watchCare.types';

export const watchServicesData: WatchService[] = [
  {
    id: 1,
    name: 'PPF Protection',
    price: 'AED 800',
    priceType: 'From',
    features: [
      'Full case coverage',
      'Bracelet protection',
      'Scratch resistance',
    ],
    icon: 'shield-checkmark-outline',
  },
  {
    id: 2,
    name: 'Expert Polish',
    price: 'AED 400',
    priceType: 'From',
    features: [
      'Deep scratch removal',
      'High-gloss finish',
      'Brushed finish restoration',
    ],
    icon: 'sparkles-outline',
  },
  {
    id: 3,
    name: 'Servicing',
    price: 'AED 600',
    priceType: 'From',
    features: [
      'Full movement overhaul',
      'Oil and lubrication',
      'Timing regulation',
    ],
    icon: 'settings-outline',
  },
  {
    id: 4,
    name: 'Luxury Concierge',
    price: 'Door-to-door',
    priceType: '',
    features: [
      'Door-to-door pickup',
      'White-glove service',
      'Priority handling',
    ],
    icon: 'car-outline',
  },
];
