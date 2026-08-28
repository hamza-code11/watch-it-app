import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { getStyles } from '../../../screens/listingDetails/listingDetails.style';
import { FullListingDetails, ListingStatus } from '../../../types/listing.types';

// Status Colors
const statusStyles: Record<ListingStatus, { bg: string }> = {
  draft: { bg: '#27272A' },
  pending: { bg: '#78350F' },
  live: { bg: '#064E3B' },
  reserved: { bg: '#1E3A8A' },
  sold: { bg: '#581C87' },
  expired: { bg: '#7F1D1D' },
};

const statusLabels: Record<ListingStatus, string> = {
  draft: 'Draft',
  pending: 'Pending',
  live: 'Live',
  reserved: 'Reserved',
  sold: 'Sold',
  expired: 'Expired',
};

export default function ListingDetails() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);
  
  // Dynamic id lein
  const { id } = useLocalSearchParams();
  const listingId = Array.isArray(id) ? id[0] : id || '1'; // Default id '1'

  // Mock Data (Backend aane par yahan se aayega)
  const [listing] = useState<FullListingDetails>({
    id: listingId,
    title: 'Rolex Submariner Date 126610LN',
    brand: 'ROLEX',
    model: 'Submariner Date',
    reference: '126610LN',
    askingPrice: 52500,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
    status: 'live',
    createdAt: '2024-02-01',
    interestedBuyers: 8,
    movement: 'Automatic',
    strapMaterial: 'Stainless Steel',
    waterResistance: '300m',
    condition: 'Excellent',
    year: 2024,
    location: 'Dubai',
    includesBoxAndPapers: true,
    acceptTradeIns: true,
    authenticateWithWatchIt: true,
    description: 'Stunning Rolex Submariner Date in excellent condition. Complete with box and papers.',
    coverPhotoIndex: 0,
  });

  const badgeStyle = statusStyles[listing.status] || { bg: '#27272A' };

  const formatAED = (price: number) => {
    return `${price.toLocaleString()} AED`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeBtn} onPress={() => router.back()}>
          <Ionicons name="close" size={18} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Listing Details</Text>
        <TouchableOpacity
          style={styles.editBtn}
          // onPress={() => router.push({
          //   pathname: '/pages/editListing/[id]',
          //   params: { id: listingId }
          // })}
        >
          <Ionicons name="create-outline" size={14} color="#FFFFFF" />
          <Text style={styles.editBtnText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Image with Status Badge */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: listing.image }} style={styles.image} resizeMode="cover" />
          <View style={[styles.statusBadge, { backgroundColor: badgeStyle.bg }]}>
            <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#34D399' }} />
            <Text style={styles.statusText}>{statusLabels[listing.status]}</Text>
          </View>
        </View>

        {/* Product Info */}
        <Text style={styles.brand}>{listing.brand}</Text>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{formatAED(listing.askingPrice)}</Text>
        <View style={styles.metaRow}>
          <Ionicons name="location-outline" size={14} color="#8B92A5" />
          <Text style={styles.metaText}>{listing.location}</Text>
          <View style={{ width: 1, height: 12, backgroundColor: '#2A2D3D' }} />
          <Ionicons name="people-outline" size={14} color="#8B92A5" />
          <Text style={styles.metaText}>{listing.interestedBuyers} Interested Buyers</Text>
        </View>

        {/* Listing Features */}
        <View>
          <Text style={styles.sectionTitle}>Listing Features</Text>
          <View style={styles.featuresRow}>
            {/* Trade-Ins */}
            <View style={[styles.featureChip, { backgroundColor: '#0B3B2A', borderColor: '#10B981' }]}>
              <Ionicons name="checkmark" size={14} color="#10B981" />
              <Text style={[styles.featureChipText, { color: '#10B981' }]}>Trade-Ins: Enabled</Text>
            </View>
            
            {/* WatchIt Auth */}
            {listing.authenticateWithWatchIt && (
              <View style={[styles.featureChip, { backgroundColor: '#1E3A8A', borderColor: '#60A5FA' }]}>
                <Ionicons name="shield-checkmark-outline" size={14} color="#60A5FA" />
                <Text style={[styles.featureChipText, { color: '#60A5FA' }]}>WatchIt Auth: Enabled</Text>
              </View>
            )}
            
            {/* Box & Papers */}
            {listing.includesBoxAndPapers && (
              <View style={[styles.featureChip, { backgroundColor: '#4A2E06', borderColor: '#FDB022' }]}>
                <Ionicons name="archive-outline" size={14} color="#FDB022" />
                <Text style={[styles.featureChipText, { color: '#FDB022' }]}>Box & Papers: Included</Text>
              </View>
            )}
          </View>
        </View>

        {/* Specifications */}
        <View style={styles.specsContainer}>
          <Text style={styles.sectionTitle}>Specifications</Text>
          <View style={styles.specsGrid}>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Reference</Text>
              <Text style={styles.specValue}>{listing.reference}</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Year</Text>
              <Text style={styles.specValue}>{listing.year}</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Condition</Text>
              <Text style={styles.specValue}>{listing.condition}</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Movement</Text>
              <Text style={styles.specValue}>{listing.movement}</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Strap Material</Text>
              <Text style={styles.specValue}>{listing.strapMaterial}</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Water Resistance</Text>
              <Text style={styles.specValue}>{listing.waterResistance}</Text>
            </View>
          </View>
        </View>

        {/* Condition & Details */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Condition & Details</Text>
          <Text style={styles.descriptionText}>{listing.description}</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.closeBtnMain} onPress={() => router.back()}>
            <Text style={styles.closeBtnText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.editBtnMain}
            // onPress={() => router.push({
            //   pathname: '/pages/editListing/[id]',
            //   params: { id: listingId }
            // })}
          >
            <Ionicons name="create-outline" size={18} color="#FFFFFF" />
            <Text style={styles.editBtnMainText}>Edit Listing</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}