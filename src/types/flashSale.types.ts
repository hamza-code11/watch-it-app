export interface FlashSaleItem {
  id: number;
  brand: string;
  title: string;
  startingPrice: string;
  flashSalePrice: string;
  discount: number;
  endsAt: string;
  image: string;
  gallery: string[]; 
  description: string;
  features: string[];
  seller: {
    name: string;
    rating: number;
    reviews: number;
  };
}


