// types/filters.ts
export interface FilterOptions {
  model: string;
  brands: string[];
  emirates: string[];
  conditions: string[];
  priceMin: string;
  priceMax: string;
  yearFrom: string;
  yearTo: string;
  authenticationStatus: 'any' | 'verified' | 'unverified';
  boxPapersOnly: boolean;
  tradeAcceptedOnly: boolean;
}

export interface FilterState {
  filters: FilterOptions;
  isDirty: boolean;
  resultsCount: number;
}

export interface Brand {
  id: string;
  name: string;
  logo?: string;
  count?: number;
}

export interface FilterSection {
  id: string;
  title: string;
  type: 'search' | 'list' | 'chips' | 'range' | 'toggle';
  options?: string[];
  placeholder?: string;
}
