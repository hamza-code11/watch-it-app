export interface Bid {
  initials: string;
  name: string;
  time: string;
  amount: string;
}

export interface AuctionItem {
  id: number;
  brand: string;
  title: string;
  startingPrice: string;
  currentPrice: string;
  bids: number;
  endsAt: string; // ISO format (e.g., 2026-09-15T18:00:00)
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  seller: {
    name: string;
    rating: number;
    reviews: number;
  };
  bidHistory: Bid[];
}