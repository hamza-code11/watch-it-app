// MyListings.tsx

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
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
import { useMyListings } from '../../../hooks/useMyListings';
import { getStyles } from '../../../screens/myListings/myListings.style';
import { ListingStatus } from '../../../types/listing.types';

const statusStyles: Record<ListingStatus, { bg: string; text: string }> = {
  draft: { bg: '#27272A', text: '#A1A1AA' },
  pending: { bg: '#78350F', text: '#FBBF24' },
  live: { bg: '#064E3B', text: '#34D399' },
  reserved: { bg: '#1E3A8A', text: '#60A5FA' },
  sold: { bg: '#581C87', text: '#C084FC' },
  expired: { bg: '#7F1D1D', text: '#F87171' },
};

const statusLabels: Record<string, string> = {
  all: 'All',
  draft: 'Draft',
  pending: 'Pending',
  live: 'Live',
  reserved: 'Reserved',
  sold: 'Sold',
  expired: 'Expired',
};

export default function MyListings() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);
  
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [activeMenuId, setActiveMenuId] = useState<string | number | null>(null);

  const { listings, isLoading, error } = useMyListings(selectedStatus);
  const statuses = ['all', 'draft', 'pending', 'live', 'reserved', 'sold', 'expired'];

  const formatAED = (price: number) => {
    return `${price.toLocaleString()} AED`;
  };

  const toggleMenu = (id: string | number) => {
    setActiveMenuId((prev) => (prev === id ? null : id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={18} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Listings</Text>
        <TouchableOpacity
          style={styles.createBtn}
          onPress={() => router.push('/pages/createListing')}
        >
          <Text style={styles.createBtnText}>+ Create</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      >
        {/* Status Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollContainer}
          style={styles.filterScrollView}
        >
          {statuses.map((status) => (
            <TouchableOpacity
              key={status}
              style={[
                styles.filterChip,
                selectedStatus === status && styles.filterChipActive,
              ]}
              onPress={() => setSelectedStatus(status)}
            >
              <Text
                style={[
                  styles.filterChipText,
                  selectedStatus === status && styles.filterChipTextActive,
                ]}
              >
                {statusLabels[status]}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Listing Count */}
        <Text style={styles.listingCount}>
          {listings.length} listing{listings.length !== 1 ? 's' : ''}
        </Text>

        {/* Listings Cards */}
        {listings.map((listing) => {
          const badgeStyle = statusStyles[listing.status] || {
            bg: '#27272A',
            text: '#FFFFFF',
          };
          const isMenuOpen = activeMenuId === listing.id;

          return (
            <View
              key={listing.id}
              style={[
                styles.listingCard,
                isMenuOpen && { zIndex: 1000, elevation: 20 }, // Fix Z-Index
              ]}
            >
              {/* Card Main Header */}
              <View style={styles.cardMain}>
                <Image
                  source={{ uri: listing.image }}
                  style={styles.listingImage}
                />

                <View style={styles.listingInfo}>
                  <Text style={styles.listingBrand}>{listing.brand}</Text>
                  <Text style={styles.listingTitle} numberOfLines={1}>
                    {listing.title}
                  </Text>
                  <Text style={styles.listingPrice}>
                    {formatAED(listing.askingPrice)}
                  </Text>
                </View>

                {/* 3 Dots Menu Button & Dropdown */}
                <View style={[styles.menuWrapper, { zIndex: 1001, elevation: 21 }]}>
                  <TouchableOpacity
                    style={styles.menuIcon}
                    onPress={() => toggleMenu(listing.id)}
                  >
                    <Ionicons name="ellipsis-vertical" size={16} color="#636B7E" />
                  </TouchableOpacity>

                  {/* Dropdown Menu */}
                  {isMenuOpen && (
                    <View style={styles.dropdownMenu}>
                      <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => {
                          setActiveMenuId(null);
                          router.push({
                            pathname: '/pages/listingDetails/[id]',
                            params: { id: String(listing.id) }
                          });
                        }}
                      >
                        <Ionicons name="eye-outline" size={16} color="#38BDF8" />
                        <Text style={styles.dropdownText}>View</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.dropdownItem}
                        // onPress={() => {
                        //   setActiveMenuId(null);
                        //   router.push({
                        //     pathname: '/pages/editListing/[id]',
                        //     params: { id: String(listing.id) }
                        //   });
                        // }}
                      >
                        <Ionicons name="create-outline" size={16} color="#38BDF8" />
                        <Text style={styles.dropdownText}>Edit</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => {
                          setActiveMenuId(null);
                          // Handle Pause logic
                        }}
                      >
                        <Ionicons name="pause-outline" size={16} color="#38BDF8" />
                        <Text style={styles.dropdownText}>Pause</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => {
                          setActiveMenuId(null);
                          // Handle Mark as Sold logic
                        }}
                      >
                        <Ionicons name="cash-outline" size={16} color="#38BDF8" />
                        <Text style={styles.dropdownText}>Mark as Sold</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => {
                          setActiveMenuId(null);
                          // Handle Delete logic
                        }}
                      >
                        <Ionicons name="trash-outline" size={16} color="#EF4444" />
                        <Text style={[styles.dropdownText, styles.dropdownTextDelete]}>
                          Delete
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>

              {/* Card Footer */}
              <View style={styles.cardFooter}>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: badgeStyle.bg },
                  ]}
                >
                  <Text style={[styles.statusText, { color: badgeStyle.text }]}>
                    {statusLabels[listing.status]}
                  </Text>
                </View>

                <View style={styles.listingMeta}>
                  <Ionicons name="people-outline" size={13} color="#8B92A5" />
                  <Text style={styles.metaText}>
                    {listing.interestedBuyers} Interested
                  </Text>
                  <Text style={styles.metaDivider}>•</Text>
                  <Text style={styles.metaText}>{listing.createdAt}</Text>
                </View>
              </View>
            </View>
          );
        })}

        {/* Empty State */}
        {listings.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              No listings found for this status.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

