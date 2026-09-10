import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { vendorDetailsData } from '../../../data/vendorDetails';
import { getStyles } from '../../../screens/vendorDetail/vendorDetail.style';

import VendorBanner from '../../../components/vendorDetail/VendorBanner';
import VendorProductGrid from '../../../components/vendorDetail/VendorProductGrid';

// Brand options
const brandOptions = [
  { id: 'all', label: 'All Brands' },
  { id: 'rolex', label: 'Rolex' },
  { id: 'omega', label: 'Omega' },
  { id: 'patek', label: 'Patek Philippe' },
  { id: 'audemars', label: 'Audemars Piguet' },
  { id: 'cartier', label: 'Cartier' },
  { id: 'tagheuer', label: 'Tag Heuer' },
  { id: 'breitling', label: 'Breitling' },
];

export default function VendorDetail() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const { id } = useLocalSearchParams();
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [filterOpen, setFilterOpen] = useState(false);

  const vendor = vendorDetailsData.find((v) => v.id === id);

  if (!vendor) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: theme.textMuted }}>Vendor not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Filter products based on selected brand
  const filteredProducts = selectedBrand === 'all'
    ? vendor.products
    : vendor.products.filter((product) => product.brandName.toLowerCase() === selectedBrand);

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
          <Text style={styles.headerTitle}>Vendor Shop</Text>
          
          {/* Filter Icon (Right Corner) */}
          <TouchableOpacity style={styles.filterIconBtn} onPress={() => setFilterOpen(!filterOpen)}>
            <Ionicons name="options-outline" size={22} color={theme.textPrimary} />
          </TouchableOpacity>
        </View>

        {/* Brand Filter Dropdown */}
        {filterOpen && (
          <View style={styles.dropdownContainer}>
            <View style={styles.dropdownHeader}>
              <Text style={styles.dropdownHeaderText}>Filter by Brand</Text>
            </View>
            {brandOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[styles.dropdownItem, selectedBrand === option.id && styles.dropdownItemSelected]}
                onPress={() => {
                  setSelectedBrand(option.id);
                  setFilterOpen(false);
                }}
              >
                <Text style={[styles.dropdownItemText, selectedBrand === option.id && styles.dropdownItemTextSelected]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Component 1: Vendor Banner */}
        <VendorBanner vendor={vendor} />

        {/* Component 2: Vendor Product Grid */}
        <VendorProductGrid
          products={filteredProducts}
          onProductPress={(productId) => router.push(`/pages/productDetail/${productId}`)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
