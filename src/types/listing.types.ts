export interface ListingFormData {
  id?: string;
  brand: string;
  title: string;
  startingPrice: string;
  endsAt: string;
  image: string | null;
  gallery: string[];
  description: string;
}

// Extra fields jo form mein hain (Specs, Condition, etc.)
export interface ListingPayload extends ListingFormData {
  movement?: string;
  strapMaterial?: string;
  waterResistance?: string;
  year?: string;
  condition?: string;
  emirate?: string;
  includeBoxPapers?: boolean;
  acceptTradeIn?: boolean;
  authenticateWatch?: boolean;
  tags?: string[];
}

// API Response Type
export interface ListingResponse {
  success: boolean;
  message: string;
  data?: ListingPayload;
}





// === My Listings ke liye nayi Types ===
export type ListingStatus = 'draft' | 'pending' | 'live' | 'reserved' | 'sold' | 'expired';

export interface MyListing {
  id: string;
  title: string;
  brand: string;
  model: string;
  reference: string;
  askingPrice: number;
  image: string;
  status: ListingStatus;
  createdAt: string;
  interestedBuyers: number;
}

export interface FullListingDetails {
  id: string;
  title: string;
  brand: string;
  model: string;
  reference: string;
  askingPrice: number;
  image: string;
  status: ListingStatus;
  createdAt: string;
  interestedBuyers: number;
  movement: string;
  strapMaterial: string;
  waterResistance: string;
  condition: string;
  year: number;
  location: string;
  includesBoxAndPapers: boolean;
  acceptTradeIns: boolean;
  authenticateWithWatchIt: boolean;
  description?: string;
  coverPhotoIndex: number;
}
