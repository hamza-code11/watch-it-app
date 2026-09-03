export interface DealerBenefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface DealerApplicationFormData {
  // Step 1: Business Details
  businessName: string;
  city: string;
  yearInBusiness: string;
  address: string;
  inventorySize: string;

  // Step 2: Contact Information
  fullName: string;
  phone: string;
  email: string;
  website: string;
  instagram: string;

  // Step 3: Brand Specialties & Message
  selectedBrands: string[];
  additionalMessage: string;

  // Step 4: Payment
  paymentMethod: string;
}

export interface DealerBrand {
  id: string;
  name: string;
}
