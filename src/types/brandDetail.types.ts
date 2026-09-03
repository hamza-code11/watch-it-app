export interface BrandStats {
  watches: number;
  vendors: number;
  founded: number;
}

export interface BrandDetailData {
  id: string;
  name: string;
  logo: string;
  country: string;
  description: string;
  stats: BrandStats;
  products: BrandProduct[];
}



export interface BrandProduct {
  id: string;
  brandId: string;
  brandName: string;
  title: string;
  sellerName: string;
  price: string;
  image: string;
  rating: number;
  condition: 'New' | 'Pre-Owned';
  year: number;
}