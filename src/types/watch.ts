// types/watch.ts
export interface Watch {
  id: string;
  brand: string;
  name: string;
  price: string;
  location: string;
  year: string;
  condition: string;
  reference: string;
  image: string;
  verified: boolean;
  boxPapers?: boolean;
  tradeAccepted?: boolean;
  authenticationStatus?: 'verified' | 'unverified';
}

export interface WatchResponse {
  watches: Watch[];
  total: number;
  hasMore: boolean;
  nextPage?: number;
}