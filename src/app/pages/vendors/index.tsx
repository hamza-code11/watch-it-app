import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { vendorsData } from '../../../data/vendors';
import { getStyles } from '../../../screens/vendors/vendors.style';

export default function Vendors() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const [search, setSearch] = useState('');

  const filteredVendors = vendorsData.filter((vendor) =>
    vendor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>All Vendors</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Banner */}
        <LinearGradient
          colors={['#1B2B4B', '#121C33', '#0D1322']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.banner}
        >
          <Text style={styles.bannerTitle}>Explore Trusted Vendors</Text>
          <Text style={styles.bannerSubtitle}>
            Discover verified sellers from around the world
          </Text>
        </LinearGradient>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchRow}>
            <View style={styles.searchBox}>
              <Ionicons name="search" size={18} color={theme.textMuted} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search for a vendor..."
                placeholderTextColor={theme.textMuted}
                value={search}
                onChangeText={setSearch}
              />
            </View>
          </View>
        </View>

        {/* Count */}
        <Text style={styles.countText}>Showing {filteredVendors.length} vendors</Text>

        {/* Vendors List */}
        <View style={styles.vendorsList}>
          {filteredVendors.map((vendor) => (
            <TouchableOpacity
              key={vendor.id}
              style={styles.vendorCard}
              onPress={() => router.push(`/pages/vendorDetail/${vendor.id}`)}
            >
              <Image source={{ uri: vendor.logo }} style={styles.vendorLogo} resizeMode="cover" />
              <View style={styles.vendorInfo}>
                {/* Vendor Name + Verified Badge (Dynamic) */}
                <View style={styles.vendorNameRow}>
                  <Text style={styles.vendorName}>{vendor.name}</Text>
                  {vendor.isVerified && (
                    <View style={styles.verifiedBadge}>
                      <Ionicons name="checkmark" size={10} color="#FFFFFF" />
                    </View>
                  )}
                </View>
                <View style={styles.vendorRating}>
                  <Ionicons name="star" size={14} color="#FDB022" />
                  <Text style={styles.vendorRatingText}>{vendor.rating} ({vendor.reviews} reviews)</Text>
                </View>
                <View style={styles.vendorMeta}>
                  <Text style={styles.vendorProducts}>{vendor.productsCount} Products</Text>
                  <Text style={styles.vendorLocation}>• {vendor.responseTime}</Text>
                </View>
                <Text style={styles.vendorCountry}>{vendor.country}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={theme.textMuted} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}