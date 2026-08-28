import { useState } from 'react';
import { createListing } from '../services/listingService';
import { ListingPayload } from '../types/listing.types';

export const useCreateListing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitListing = async (payload: ListingPayload) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Service call (Backend abhi connect nahi hai, bas console log)
      console.log('Payload sent to service:', payload);
      
      // Commented out until backend is ready
      // const response = await createListing(payload);
      // setSuccess(true);
      
      // Temporary success for now (backend aane par hata dein)
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    success,
    submitListing,
  };
};
