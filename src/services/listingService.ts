import { api } from '../api/axiosInstance';
import { ListingPayload, ListingResponse, MyListing } from '../types/listing.types';

// Create a new listing
export const createListing = async (payload: ListingPayload): Promise<ListingResponse> => {
  try {
    const response = await api.post<ListingResponse>('/listings', payload);
    return response.data;
  } catch (error: any) {
    // Error handling (backed connect hone par yeh kaam karega)
    console.error('Error creating listing:', error.response?.data || error.message);
    throw error;
  }
};


// Get My Listings (Status filter ke sath)
export const getMyListings = async (status?: string): Promise<MyListing[]> => {
  try {
    const response = await api.get<MyListing[]>('/listings/mine', {
      params: { status }
    });
    return response.data;
  } catch (error: any) {
    console.error('Error fetching my listings:', error.response?.data || error.message);
    throw error;
  }
};

// Delete a listing
export const deleteListing = async (id: string): Promise<ListingResponse> => {
  try {
    const response = await api.delete<ListingResponse>(`/listings/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('Error deleting listing:', error.response?.data || error.message);
    throw error;
  }
};