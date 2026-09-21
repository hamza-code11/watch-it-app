export type AuctionCategory = 'live' | 'endingSoon' | 'upcoming' | 'myBids';

export interface BidEntry {
  id: number;
  user: { name: string; initials: string };
  amount: number;
  timeAgo: string;
}

export interface ProductDetails {
  brand: string;
  model: string;
  referenceNumber: string;
  caseDiameter: string;
  caseMaterial: string;
  movement: string;
  waterResistance: string;
  boxPapers: string;
  condition: string;
}

export interface SimilarLot {
  id: number;
  brand: string;
  name: string;
  reference: string;
  price: number;
  status: 'live' | 'endingSoon' | 'upcoming';
  image: string;
}

export interface Auction {
  id: number;
  category: AuctionCategory;
  brand: string;
  name: string;              // "Daytona"
  reference: string;         // "Ref. 116500LN | 40mm | Stainless Steel"
  images: string[];
  currentBid: number;
  startingBid: number;
  bidders: number;
  endsAt: string;            // ISO timestamp
  bidHistory: BidEntry[];
  details: ProductDetails;
  similarLots: Auction[];
}
