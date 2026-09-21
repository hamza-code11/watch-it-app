export interface CustomerReview {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
  helpfulCount: number;
  title: string;
}

export interface ProductDetailData {
  id: string;
  brandName: string;
  title: string;
  price: string;
  description: string;
  images: string[];
  rating: number;
  reviews: number;
  condition: 'New' | 'Pre-Owned';
  year: number;
  seller: {
    name: string;
    rating: number;
    reviews: number;
    location: string;
  };
  specifications: {
    label: string;
    value: string;
  }[];
  customerReviews: CustomerReview[];
}
