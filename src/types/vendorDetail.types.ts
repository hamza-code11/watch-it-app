export interface VendorDetailData {
  id: string;
  name: string;
  logo: string;
  address: string;
  country: string;
  productsCount: number;
  rating: number;
  reviews: number;
  responseTime: string;
  description: string;
  isVerified: boolean;
  products: {
    id: string;
    brandName: string;
    title: string;
    sellerName: string;
    price: string;
    image: string;
    rating: number;
    condition: 'New' | 'Pre-Owned';
    year: number;
  }[];
}
