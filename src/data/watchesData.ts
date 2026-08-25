// data/watchesData.ts
import { Watch } from '../types/watch';

export const WATCHES: Watch[] = [
  {
    id: "1",
    brand: "ROLEX",
    name: "Daytona 116500LN White Dial",
    price: "145,000",
    location: "Dubai",
    year: "2023",
    condition: "Mint",
    reference: "Ref. 116500LN",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
    verified: true,
    boxPapers: true,
    tradeAccepted: false,
    authenticationStatus: 'verified',
  },
  {
    id: "2",
    brand: "PATEK PHILIPPE",
    name: "Nautilus 5711/1A-010",
    price: "320,000",
    location: "Dubai",
    year: "2022",
    condition: "Mint",
    reference: "Ref. 5711/1A",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800",
    verified: true,
    boxPapers: true,
    tradeAccepted: true,
    authenticationStatus: 'verified',
  },
  {
    id: "3",
    brand: "AUDEMARS PIGUET",
    name: "Royal Oak 15500ST Blue Dial",
    price: "95,000",
    location: "Abu Dhabi",
    year: "2023",
    condition: "Excellent",
    reference: "Ref. 15500ST",
    image: "https://images.unsplash.com/photo-1495856458515-0637185db551?w=800",
    verified: true,
    boxPapers: true,
    tradeAccepted: false,
    authenticationStatus: 'verified',
  },
  {
    id: "4",
    brand: "OMEGA",
    name: "Speedmaster Moonwatch Professional",
    price: "26,500",
    location: "Dubai",
    year: "2023",
    condition: "Mint",
    reference: "Ref. 311.30.42.30.01.001",
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800",
    verified: true,
    boxPapers: true,
    tradeAccepted: false,
    authenticationStatus: 'verified',
  },
  {
    id: "5",
    brand: "IWC",
    name: "Portugieser Chronograph",
    price: "32,900",
    location: "Abu Dhabi",
    year: "2022",
    condition: "Very Good",
    reference: "Ref. IW3716",
    image: "https://images.unsplash.com/photo-1495856458515-0637185db551?w=800",
    verified: false,
    boxPapers: false,
    tradeAccepted: true,
    authenticationStatus: 'unverified',
  },
  {
    id: "6",
    brand: "BREITLING",
    name: "Navitimer B01 Chronograph",
    price: "21,000",
    location: "Dubai",
    year: "2022",
    condition: "Excellent",
    reference: "Ref. AB0120",
    image: "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?w=800",
    verified: true,
    boxPapers: true,
    tradeAccepted: false,
    authenticationStatus: 'verified',
  },
  {
    id: "7",
    brand: "TAG HEUER",
    name: "Carrera Calibre 16",
    price: "12,800",
    location: "Sharjah",
    year: "2023",
    condition: "Excellent",
    reference: "Ref. CV2A10",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800",
    verified: false,
    boxPapers: false,
    tradeAccepted: true,
    authenticationStatus: 'unverified',
  },
  {
    id: "8",
    brand: "PANERAI",
    name: "Luminor Marina 44mm",
    price: "15,400",
    location: "Dubai",
    year: "2021",
    condition: "Good",
    reference: "Ref. PAM01312",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
    verified: false,
    boxPapers: false,
    tradeAccepted: false,
    authenticationStatus: 'unverified',
  },
  {
    id: "9",
    brand: "CARTIER",
    name: "Santos de Cartier Large",
    price: "18,200",
    location: "Abu Dhabi",
    year: "2023",
    condition: "Mint",
    reference: "Ref. WSSA0029",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800",
    verified: true,
    boxPapers: true,
    tradeAccepted: false,
    authenticationStatus: 'verified',
  },
  {
    id: "10",
    brand: "GRAND SEIKO",
    name: "Spring Drive Snowflake",
    price: "16,800",
    location: "Dubai",
    year: "2022",
    condition: "Excellent",
    reference: "Ref. SBGA211",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
    verified: true,
    boxPapers: true,
    tradeAccepted: false,
    authenticationStatus: 'verified',
  },
];

export const getWatches = (filters?: any): Watch[] => {
  let filtered = [...WATCHES];
  
  if (filters) {
    // Filter by model
    if (filters.model) {
      filtered = filtered.filter(w => 
        w.name.toLowerCase().includes(filters.model.toLowerCase()) ||
        w.brand.toLowerCase().includes(filters.model.toLowerCase())
      );
    }
    
    // Filter by brands
    if (filters.brands && filters.brands.length > 0) {
      filtered = filtered.filter(w => filters.brands.includes(w.brand));
    }
    
    // Filter by emirates
    if (filters.emirates && filters.emirates.length > 0) {
      filtered = filtered.filter(w => filters.emirates.includes(w.location));
    }
    
    // Filter by conditions
    if (filters.conditions && filters.conditions.length > 0) {
      filtered = filtered.filter(w => filters.conditions.includes(w.condition));
    }
    
    // Filter by price
    if (filters.priceMin) {
      filtered = filtered.filter(w => parseFloat(w.price.replace(/,/g, '')) >= parseFloat(filters.priceMin));
    }
    if (filters.priceMax) {
      filtered = filtered.filter(w => parseFloat(w.price.replace(/,/g, '')) <= parseFloat(filters.priceMax));
    }
    
    // Filter by year
    if (filters.yearFrom) {
      filtered = filtered.filter(w => parseInt(w.year) >= parseInt(filters.yearFrom));
    }
    if (filters.yearTo) {
      filtered = filtered.filter(w => parseInt(w.year) <= parseInt(filters.yearTo));
    }
    
    // Filter by authentication status
    if (filters.authenticationStatus && filters.authenticationStatus !== 'any') {
      filtered = filtered.filter(w => 
        w.authenticationStatus === filters.authenticationStatus
      );
    }
    
    // Filter by box & papers
    if (filters.boxPapersOnly) {
      filtered = filtered.filter(w => w.boxPapers === true);
    }
    
    // Filter by trade accepted
    if (filters.tradeAcceptedOnly) {
      filtered = filtered.filter(w => w.tradeAccepted === true);
    }
  }
  
  return filtered;
};

