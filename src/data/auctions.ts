import { Auction } from '../types/auction.types';

const now = Date.now();
const in2Days  = new Date(now + 2  * 24 * 60 * 60 * 1000).toISOString();
const in5Hours = new Date(now + 5  * 60 * 60 * 1000).toISOString();
const in10Days = new Date(now + 10 * 24 * 60 * 60 * 1000).toISOString();
const in1Hour  = new Date(now + 1  * 60 * 60 * 1000).toISOString();
const in15Days = new Date(now + 15 * 24 * 60 * 60 * 1000).toISOString();
const in3Days  = new Date(now + 3  * 24 * 60 * 60 * 1000).toISOString();

export const auctionCategories = [
  { key: 'live',       label: 'Live' },
  { key: 'endingSoon', label: 'Ending Soon' },
  { key: 'upcoming',   label: 'Upcoming' },
  { key: 'myBids',     label: 'My Bids' },
] as const;

// =========================================================
// LIVE (3)
// =========================================================

const daytonaAuction: Auction = {
  id: 1,
  category: 'live',
  brand: 'ROLEX',
  name: 'Daytona',
  reference: 'Ref. 116500LN | 40mm | Stainless Steel',
  images: [
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800',
    'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800',
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800',
    'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800',
  ],
  currentBid: 182000,
  startingBid: 150000,
  bidders: 12,
  endsAt: in2Days,
  bidHistory: [
    { id: 1, user: { name: 'Ahmed K.',    initials: 'AK' }, amount: 182000, timeAgo: '3 days ago' },
    { id: 2, user: { name: 'Sarah B.',    initials: 'SB' }, amount: 180000, timeAgo: '3 days ago' },
    { id: 3, user: { name: 'Mohammed K.', initials: 'MK' }, amount: 175000, timeAgo: '3 days ago' },
    { id: 4, user: { name: 'Luca T.',     initials: 'LT' }, amount: 172000, timeAgo: '3 days ago' },
    { id: 5, user: { name: 'Ahmed K.',    initials: 'AK' }, amount: 168000, timeAgo: '3 days ago' },
    { id: 6, user: { name: 'John S.',     initials: 'JS' }, amount: 165000, timeAgo: '3 days ago' },
  ],
  details: {
    brand: 'Rolex', model: 'Daytona', referenceNumber: '116500LN',
    caseDiameter: '40mm', caseMaterial: 'Stainless Steel',
    movement: 'Automatic Chronograph', waterResistance: '100m',
    boxPapers: 'Full Set', condition: 'Excellent',
  },
  similarLots: [],
};

const richardMilleAuction: Auction = {
  id: 101,
  category: 'live',
  brand: 'RICHARD MILLE',
  name: 'RM 011',
  reference: 'Ref. RM011-FM | 50mm | Titanium',
  images: [
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800',
    'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800',
  ],
  currentBid: 620000,
  startingBid: 550000,
  bidders: 5,
  endsAt: in5Hours,
  bidHistory: [
    { id: 1, user: { name: 'Faisal A.', initials: 'FA' }, amount: 620000, timeAgo: '2 hours ago' },
    { id: 2, user: { name: 'Hassan M.', initials: 'HM' }, amount: 600000, timeAgo: '4 hours ago' },
  ],
  details: {
    brand: 'Richard Mille', model: 'RM 011', referenceNumber: 'RM011-FM',
    caseDiameter: '50mm', caseMaterial: 'Titanium',
    movement: 'Automatic Flyback', waterResistance: '50m',
    boxPapers: 'Full Set', condition: 'Mint',
  },
  similarLots: [],
};

const apAuction: Auction = {
  id: 105,
  category: 'live',
  brand: 'AUDEMARS PIGUET',
  name: 'Royal Oak',
  reference: 'Ref. 15500ST | 41mm | Steel',
  images: ['https://images.unsplash.com/photo-1629581678953-fbe3a29c2a3a?w=800'],
  currentBid: 240000,
  startingBid: 210000,
  bidders: 7,
  endsAt: in2Days,
  bidHistory: [],
  details: {
    brand: 'Audemars Piguet', model: 'Royal Oak', referenceNumber: '15500ST',
    caseDiameter: '41mm', caseMaterial: 'Steel',
    movement: 'Automatic', waterResistance: '50m',
    boxPapers: 'Full Set', condition: 'Excellent',
  },
  similarLots: [],
};

// =========================================================
// ENDING SOON (3)
// =========================================================

const patekAuction: Auction = {
  id: 103,
  category: 'endingSoon',
  brand: 'PATEK PHILIPPE',
  name: 'Nautilus',
  reference: 'Ref. 5711/1A | 40mm | Steel',
  images: ['https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800'],
  currentBid: 980000,
  startingBid: 900000,
  bidders: 15,
  endsAt: in5Hours,
  bidHistory: [
    { id: 1, user: { name: 'Omar S.', initials: 'OS' }, amount: 980000, timeAgo: '30 mins ago' },
  ],
  details: {
    brand: 'Patek Philippe', model: 'Nautilus', referenceNumber: '5711/1A',
    caseDiameter: '40mm', caseMaterial: 'Steel',
    movement: 'Automatic', waterResistance: '120m',
    boxPapers: 'Full Set', condition: 'Mint',
  },
  similarLots: [],
};

const cartierAuction: Auction = {
  id: 102,
  category: 'endingSoon',
  brand: 'CARTIER',
  name: 'Santos de Cartier',
  reference: 'Ref. WSSA0018 | 39.8mm | Steel',
  images: [
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800',
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800',
  ],
  currentBid: 42000,
  startingBid: 38000,
  bidders: 8,
  endsAt: in1Hour,
  bidHistory: [
    { id: 1, user: { name: 'Layla R.', initials: 'LR' }, amount: 42000, timeAgo: '1 hour ago' },
  ],
  details: {
    brand: 'Cartier', model: 'Santos', referenceNumber: 'WSSA0018',
    caseDiameter: '39.8mm', caseMaterial: 'Steel',
    movement: 'Automatic', waterResistance: '100m',
    boxPapers: 'Full Set', condition: 'Excellent',
  },
  similarLots: [],
};

const tudorAuction: Auction = {
  id: 106,
  category: 'endingSoon',
  brand: 'TUDOR',
  name: 'Black Bay 58',
  reference: 'Ref. 79030N | 39mm | Steel',
  images: ['https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800'],
  currentBid: 14500,
  startingBid: 12000,
  bidders: 9,
  endsAt: in5Hours,
  bidHistory: [
    { id: 1, user: { name: 'Khalid N.', initials: 'KN' }, amount: 14500, timeAgo: '45 mins ago' },
  ],
  details: {
    brand: 'Tudor', model: 'Black Bay 58', referenceNumber: '79030N',
    caseDiameter: '39mm', caseMaterial: 'Steel',
    movement: 'Automatic', waterResistance: '200m',
    boxPapers: 'Full Set', condition: 'Excellent',
  },
  similarLots: [],
};

// =========================================================
// UPCOMING (3)
// =========================================================

const omegaAuction: Auction = {
  id: 104,
  category: 'upcoming',
  brand: 'OMEGA',
  name: 'Speedmaster',
  reference: 'Ref. 310.30 | 42mm | Steel',
  images: ['https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800'],
  currentBid: 32000,
  startingBid: 28000,
  bidders: 0,
  endsAt: in10Days,
  bidHistory: [],
  details: {
    brand: 'Omega', model: 'Speedmaster', referenceNumber: '310.30',
    caseDiameter: '42mm', caseMaterial: 'Steel',
    movement: 'Manual', waterResistance: '50m',
    boxPapers: 'Full Set', condition: 'Excellent',
  },
  similarLots: [],
};

const jlcAuction: Auction = {
  id: 107,
  category: 'upcoming',
  brand: 'JAEGER-LECOULTRE',
  name: 'Reverso Classic',
  reference: 'Ref. Q2548520 | 45.6mm | Steel',
  images: ['https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800'],
  currentBid: 58000,
  startingBid: 52000,
  bidders: 0,
  endsAt: in15Days,
  bidHistory: [],
  details: {
    brand: 'Jaeger-LeCoultre', model: 'Reverso Classic', referenceNumber: 'Q2548520',
    caseDiameter: '45.6mm', caseMaterial: 'Steel',
    movement: 'Manual', waterResistance: '30m',
    boxPapers: 'Full Set', condition: 'Mint',
  },
  similarLots: [],
};

const breitlingAuction: Auction = {
  id: 108,
  category: 'upcoming',
  brand: 'BREITLING',
  name: 'Navitimer B01',
  reference: 'Ref. AB0121211 | 43mm | Steel',
  images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800'],
  currentBid: 45000,
  startingBid: 40000,
  bidders: 0,
  endsAt: in10Days,
  bidHistory: [],
  details: {
    brand: 'Breitling', model: 'Navitimer B01', referenceNumber: 'AB0121211',
    caseDiameter: '43mm', caseMaterial: 'Steel',
    movement: 'Automatic Chronograph', waterResistance: '30m',
    boxPapers: 'Full Set', condition: 'Excellent',
  },
  similarLots: [],
};

// =========================================================
// MY BIDS (3)
// =========================================================

const tagHeuerAuction: Auction = {
  id: 109,
  category: 'myBids',
  brand: 'TAG HEUER',
  name: 'Carrera',
  reference: 'Ref. CBN2A1B | 44mm | Steel',
  images: ['https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800'],
  currentBid: 18500,
  startingBid: 15000,
  bidders: 4,
  endsAt: in2Days,
  bidHistory: [
    { id: 1, user: { name: 'You', initials: 'ME' }, amount: 18500, timeAgo: '1 day ago' },
  ],
  details: {
    brand: 'Tag Heuer', model: 'Carrera', referenceNumber: 'CBN2A1B',
    caseDiameter: '44mm', caseMaterial: 'Steel',
    movement: 'Automatic', waterResistance: '100m',
    boxPapers: 'Full Set', condition: 'Excellent',
  },
  similarLots: [],
};

const iwcAuction: Auction = {
  id: 110,
  category: 'myBids',
  brand: 'IWC',
  name: 'Portugieser Chrono',
  reference: 'Ref. IW371605 | 41mm | Steel',
  images: ['https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800'],
  currentBid: 27500,
  startingBid: 24000,
  bidders: 3,
  endsAt: in3Days,
  bidHistory: [
    { id: 1, user: { name: 'You', initials: 'ME' }, amount: 27500, timeAgo: '5 hours ago' },
  ],
  details: {
    brand: 'IWC', model: 'Portugieser Chrono', referenceNumber: 'IW371605',
    caseDiameter: '41mm', caseMaterial: 'Steel',
    movement: 'Automatic Chronograph', waterResistance: '30m',
    boxPapers: 'Full Set', condition: 'Excellent',
  },
  similarLots: [],
};

const zenithAuction: Auction = {
  id: 111,
  category: 'myBids',
  brand: 'ZENITH',
  name: 'Chronomaster Sport',
  reference: 'Ref. 03.3100.3600 | 41mm | Steel',
  images: ['https://images.unsplash.com/photo-1629581678953-fbe3a29c2a3a?w=800'],
  currentBid: 34000,
  startingBid: 30000,
  bidders: 5,
  endsAt: in2Days,
  bidHistory: [
    { id: 1, user: { name: 'You', initials: 'ME' }, amount: 34000, timeAgo: '2 days ago' },
  ],
  details: {
    brand: 'Zenith', model: 'Chronomaster Sport', referenceNumber: '03.3100.3600',
    caseDiameter: '41mm', caseMaterial: 'Steel',
    movement: 'Automatic Chronograph', waterResistance: '100m',
    boxPapers: 'Full Set', condition: 'Mint',
  },
  similarLots: [],
};

// =========================================================
// MASTER LIST
// =========================================================

export const auctions: Auction[] = [
  // Live
  daytonaAuction,
  richardMilleAuction,
  apAuction,
  // Ending Soon
  patekAuction,
  cartierAuction,
  tudorAuction,
  // Upcoming
  omegaAuction,
  jlcAuction,
  breitlingAuction,
  // My Bids
  tagHeuerAuction,
  iwcAuction,
  zenithAuction,
];

// =========================================================
// SIMILAR LOTS — same category wale baaki 2 products
// =========================================================
// Har auction ke similarLots mein usi category ke baaki 2 auctions honge.

daytonaAuction.similarLots      = [richardMilleAuction, apAuction];
richardMilleAuction.similarLots = [daytonaAuction,      apAuction];
apAuction.similarLots           = [daytonaAuction,      richardMilleAuction];

patekAuction.similarLots        = [cartierAuction,      tudorAuction];
cartierAuction.similarLots      = [patekAuction,        tudorAuction];
tudorAuction.similarLots        = [patekAuction,        cartierAuction];

omegaAuction.similarLots        = [jlcAuction,          breitlingAuction];
jlcAuction.similarLots          = [omegaAuction,        breitlingAuction];
breitlingAuction.similarLots    = [omegaAuction,        jlcAuction];

tagHeuerAuction.similarLots     = [iwcAuction,          zenithAuction];
iwcAuction.similarLots          = [tagHeuerAuction,     zenithAuction];
zenithAuction.similarLots       = [tagHeuerAuction,     iwcAuction];