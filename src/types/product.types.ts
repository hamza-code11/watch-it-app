export interface Product {
  id: string;
  brandName: string;
  title: string;
  sellerName: string;
  price: string;
  image: string;
  rating: number;
  condition: 'New' | 'Pre-Owned';
  year: number;
}
