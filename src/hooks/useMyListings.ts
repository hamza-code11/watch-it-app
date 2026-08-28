import { useCallback, useEffect, useState } from 'react';
import { myListingsData } from '../data/myListings';
import { MyListing } from '../types/listing.types';

export const useMyListings = (status?: string) => {
  const [listings, setListings] = useState<MyListing[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchListings = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Backend connect hone ke baad yeh API call karega
      // const data = await getMyListings(status);
      
      // Abhi data file se fetch kar rahe hain
      if (status && status !== 'all') {
        setListings(myListingsData.filter((item) => item.status === status));
      } else {
        setListings(myListingsData);
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [status]);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  return {
    listings,
    isLoading,
    error,
    refetch: fetchListings,
  };
};

