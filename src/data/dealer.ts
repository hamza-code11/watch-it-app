import { DealerApplicationFormData, DealerBenefit, DealerBrand } from '../types/dealer.types';

export const dealerBenefits: DealerBenefit[] = [
  {
    id: 1,
    title: 'Verified Dealer Badge',
    description: 'Stand out with our official authentication partnership',
    icon: 'shield-checkmark-outline',
  },
  {
    id: 2,
    title: 'Access to 10,000+ Buyers',
    description: 'Reach serious collectors across the UAE instantly',
    icon: 'people-outline',
  },
  {
    id: 3,
    title: 'Priority Listings',
    description: 'Your inventory featured at the top of search results',
    icon: 'trending-up-outline',
  },
  {
    id: 4,
    title: 'Dedicated Shop Page',
    description: 'A branded storefront showcasing your full inventory',
    icon: 'storefront-outline',
  },
];

export const initialDealerApplicationData: DealerApplicationFormData = {
  businessName: '',
  city: '',
  yearInBusiness: '',
  address: '',
  inventorySize: '',
  fullName: '',
  phone: '',
  email: '',
  website: '',
  instagram: '',
  selectedBrands: [],
  additionalMessage: '',
  paymentMethod: 'card',
};

export const dealerBrands: DealerBrand[] = [
  { id: 'rolex', name: 'Rolex' },
  { id: 'audemars', name: 'Audemars Piguet' },
  { id: 'patek', name: 'Patek Philippe' },
  { id: 'richard', name: 'Richard Mille' },
  { id: 'omega', name: 'Omega' },
  { id: 'tagheuer', name: 'TAG Heuer' },
  { id: 'cartier', name: 'Cartier' },
  { id: 'iwc', name: 'IWC' },
  { id: 'breitling', name: 'Breitling' },
  { id: 'panerai', name: 'Panerai' },
  { id: 'jaeger', name: 'Jaeger-LeCoultre' },
  { id: 'vacheron', name: 'Vacheron Constantin' },
  { id: 'other', name: 'Other' },
];

export const inventorySizes = [
  { id: '1-10', label: '1-10 pieces' },
  { id: '10-50', label: '10-50 pieces' },
  { id: '50-100', label: '50-100 pieces' },
  { id: '100+', label: '100+ pieces' },
];
