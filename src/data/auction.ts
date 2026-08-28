import { AuctionItem } from '../types/auction.types';

// Sirf Live Auctions (endsAt future mein hain)
export const auctionsData: AuctionItem[] = [
  {
    id: 1,
    brand: 'ROLEX',
    title: 'Submariner Date',
    startingPrice: 'AED 12,500',
    currentPrice: 'AED 14,200',
    bids: 5,
    endsAt: '2026-09-15T18:00:00',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'The Rolex Submariner Date is a classic dive watch that has stood the test of time. With its iconic design and superior craftsmanship, this timepiece is a must-have for any collector.',
    features: [
      '40mm Oystersteel case',
      'Black Cerachrom bezel',
      'Date window with Cyclops lens',
      'Caliber 3235 movement',
      '300m water resistance',
      '5-year international guarantee',
    ],
    seller: {
      name: 'Luxury Timepieces',
      rating: 4.9,
      reviews: 127,
    },
    bidHistory: [
      { initials: 'DC', name: 'David C.', time: 'Feb 19, 07:12', amount: 'AED 14,200' },
      { initials: 'EW', name: 'Emma W.', time: 'Feb 19, 06:34', amount: 'AED 13,800' },
      { initials: 'MR', name: 'Michael R.', time: 'Feb 19, 05:21', amount: 'AED 13,500' },
      { initials: 'SM', name: 'Sarah M.', time: 'Feb 19, 03:47', amount: 'AED 13,100' },
      { initials: 'JD', name: 'John D.', time: 'Feb 19, 02:33', amount: 'AED 12,800' },
    ],
  },
  {
    id: 2,
    brand: 'PATEK PHILIPPE',
    title: 'Nautilus 5711/1A',
    startingPrice: 'AED 120,000',
    currentPrice: 'AED 138,000',
    bids: 8,
    endsAt: '2026-09-25T18:00:00',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'The Patek Philippe Nautilus 5711/1A is an icon of luxury sports watches. Its distinctive porthole design and blue dial make it one of the most sought-after timepieces in the world.',
    features: [
      '40mm Stainless steel case',
      'Blue dial with horizontal embossing',
      'Date window at 3 o’clock',
      'Caliber 26-330 S C movement',
      '120m water resistance',
      'International warranty',
    ],
    seller: {
      name: 'Elite Watches Dubai',
      rating: 4.8,
      reviews: 98,
    },
    bidHistory: [
      { initials: 'AK', name: 'Ahmed K.', time: 'Feb 18, 12:05', amount: 'AED 138,000' },
      { initials: 'RS', name: 'Rana S.', time: 'Feb 18, 10:45', amount: 'AED 135,500' },
      { initials: 'ZB', name: 'Zain B.', time: 'Feb 17, 09:30', amount: 'AED 130,000' },
      { initials: 'MM', name: 'Mohammed M.', time: 'Feb 17, 08:00', amount: 'AED 125,500' },
      { initials: 'NA', name: 'Noor A.', time: 'Feb 16, 05:20', amount: 'AED 122,000' },
    ],
  },
  {
    id: 3,
    brand: 'OMEGA',
    title: 'Speedmaster Professional',
    startingPrice: 'AED 25,000',
    currentPrice: 'AED 31,500',
    bids: 12,
    endsAt: '2026-09-18T18:00:00',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'The Omega Speedmaster Professional is the legendary chronograph worn on the moon. With its iconic tachymeter bezel and manual-winding movement, it is a true collector’s piece.',
    features: [
      '42mm Stainless steel case',
      'Black dial with luminous markers',
      'Tachymeter bezel',
      'Caliber 1861 movement',
      '50m water resistance',
      '5-year international warranty',
    ],
    seller: {
      name: 'Vintage Vault',
      rating: 4.7,
      reviews: 215,
    },
    bidHistory: [
      { initials: 'FA', name: 'Faraz A.', time: 'Feb 18, 18:22', amount: 'AED 31,500' },
      { initials: 'NK', name: 'Nadia K.', time: 'Feb 18, 15:11', amount: 'AED 29,800' },
      { initials: 'SA', name: 'Salman A.', time: 'Feb 18, 13:40', amount: 'AED 28,500' },
      { initials: 'HA', name: 'Hassan A.', time: 'Feb 17, 22:15', amount: 'AED 26,000' },
    ],
  },
  {
    id: 4,
    brand: 'AUDEMARS PIGUET',
    title: 'Royal Oak 15500ST',
    startingPrice: 'AED 95,000',
    currentPrice: 'AED 110,500',
    bids: 6,
    endsAt: '2026-08-15T18:00:00',
    image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'The Audemars Piguet Royal Oak 15500ST features the iconic octagonal bezel and "Tapisserie" dial, making it a masterpiece of modern haute horlogerie.',
    features: [
      '41mm Stainless steel case',
      'Blue "Tapisserie" dial',
      'Octagonal bezel with 8 screws',
      'Caliber 4302 movement',
      '50m water resistance',
      'International warranty',
    ],
    seller: {
      name: 'Prestige Timepieces',
      rating: 4.9,
      reviews: 74,
    },
    bidHistory: [
      { initials: 'TS', name: 'Tariq S.', time: 'Feb 19, 09:00', amount: 'AED 110,500' },
      { initials: 'LM', name: 'Lina M.', time: 'Feb 18, 20:30', amount: 'AED 108,000' },
      { initials: 'OA', name: 'Omar A.', time: 'Feb 18, 17:10', amount: 'AED 102,000' },
      { initials: 'RK', name: 'Rania K.', time: 'Feb 18, 10:00', amount: 'AED 97,500' },
    ],
  },
  {
    id: 5,
    brand: 'CARTIER',
    title: 'Santos de Cartier',
    startingPrice: 'AED 38,000',
    currentPrice: 'AED 45,200',
    bids: 9,
    endsAt: '2026-08-26T18:00:00',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'The Cartier Santos is one of the first modern wristwatches. Its square case, exposed screws, and Roman numerals make it a timeless icon of elegance.',
    features: [
      '39.8mm Stainless steel case',
      'Silvered opaline dial',
      'Roman numerals and sword hands',
      'Caliber 1847 MC movement',
      '100m water resistance',
      '2-year international warranty',
    ],
    seller: {
      name: 'Heritage Watches',
      rating: 4.6,
      reviews: 156,
    },
    bidHistory: [
      { initials: 'SC', name: 'Sara C.', time: 'Feb 19, 11:12', amount: 'AED 45,200' },
      { initials: 'AB', name: 'Ali B.', time: 'Feb 19, 08:55', amount: 'AED 43,000' },
      { initials: 'DP', name: 'Daniyal P.', time: 'Feb 18, 21:33', amount: 'AED 41,200' },
      { initials: 'NB', name: 'Nada B.', time: 'Feb 18, 14:00', amount: 'AED 39,500' },
    ],
  },
  {
    id: 6,
    brand: 'BREITLING',
    title: 'Navitimer B01 Chronograph',
    startingPrice: 'AED 42,000',
    currentPrice: 'AED 49,800',
    bids: 10,
    endsAt: '2026-09-15T18:00:00',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'The Breitling Navitimer B01 Chronograph features the iconic circular slide rule bezel, making it the ultimate pilot’s watch and a marvel of engineering.',
    features: [
      '43mm Stainless steel case',
      'Black dial with silver sub-dials',
      'Circular slide rule bezel',
      'Caliber B01 movement',
      '30m water resistance',
      '5-year international warranty',
    ],
    seller: {
      name: 'Aviation Timepieces',
      rating: 4.8,
      reviews: 89,
    },
    bidHistory: [
      { initials: 'RU', name: 'Rashid U.', time: 'Feb 19, 10:20', amount: 'AED 49,800' },
      { initials: 'SH', name: 'Sana H.', time: 'Feb 19, 07:40', amount: 'AED 48,200' },
      { initials: 'FA', name: 'Faisal A.', time: 'Feb 18, 22:01', amount: 'AED 45,500' },
      { initials: 'IN', name: 'Imran N.', time: 'Feb 18, 11:30', amount: 'AED 43,000' },
    ],
  },
];

// Helper 1: Sirf Live Auctions nikaalo (Future endsAt)
export const getLiveAuctions = (): AuctionItem[] => {
  const now = Date.now();
  return auctionsData.filter((item) => new Date(item.endsAt).getTime() > now);
};

// Helper 2: Ended auctions nikaalne ke liye (jo time guzar chuke hain)
export const getEndedAuctions = (): AuctionItem[] => {
  const now = Date.now();
  return auctionsData.filter((item) => new Date(item.endsAt).getTime() <= now);
};

