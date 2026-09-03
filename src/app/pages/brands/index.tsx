import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { alphabetFilters, brandsData } from '../../../data/brands';
import { getStyles } from '../../../screens/brands/brands.style';

export default function Brands() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const [search, setSearch] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredBrands = brandsData.filter((brand) => {
    const matchesSearch = brand.name.toLowerCase().includes(search.toLowerCase());
    const matchesLetter = selectedLetter === 'All' || brand.letter === selectedLetter;
    return matchesSearch && matchesLetter;
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Top Header Row (Back Button + Title) */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>All Brands</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Banner */}
        <LinearGradient
          colors={['#1B2B4B', '#121C33', '#0D1322']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.banner}
        >
          <Text style={styles.bannerTitle}>Explore Premium Brands</Text>
          <Text style={styles.bannerSubtitle}>
            Discover luxury watchmakers from around the world
          </Text>
        </LinearGradient>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchRow}>
            <View style={styles.searchBox}>
              <Ionicons name="search" size={18} color={theme.textMuted} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search for a brand..."
                placeholderTextColor={theme.textMuted}
                value={search}
                onChangeText={setSearch}
              />
            </View>
            <View style={styles.viewToggle}>
              <TouchableOpacity
                style={[styles.toggleBtn, viewMode === 'grid' && styles.toggleBtnActive]}
                onPress={() => setViewMode('grid')}
              >
                <Ionicons name="grid" size={16} color={viewMode === 'grid' ? '#FFFFFF' : theme.textMuted} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.toggleBtn, viewMode === 'list' && styles.toggleBtnActive]}
                onPress={() => setViewMode('list')}
              >
                <Ionicons name="list" size={16} color={viewMode === 'list' ? '#FFFFFF' : theme.textMuted} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Alphabet Filters */}
        <View style={styles.alphabetRow}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.alphabetScroll}>
            {alphabetFilters.map((letter) => (
              <TouchableOpacity
                key={letter}
                style={[styles.filterChip, selectedLetter === letter && styles.filterChipActive]}
                onPress={() => setSelectedLetter(letter)}
              >
                <Text style={[styles.filterText, selectedLetter === letter && styles.filterTextActive]}>
                  {letter}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Count */}
        <Text style={styles.countText}>Showing {filteredBrands.length} brands</Text>

        {/* Brands List */}
        {filteredBrands.length > 0 && (
          <>
            {/* Grid View */}
            {viewMode === 'grid' && (
              <View style={styles.brandsGrid}>
                {filteredBrands.map((brand) => (
                  <TouchableOpacity
                    key={brand.id}
                    style={styles.brandCard}
                    onPress={() => router.push(`/pages/brandDetail/${brand.id}`)}
                  >
                    <Image
                      source={{ uri: brand.logo }}
                      style={styles.brandLogo}
                      resizeMode="contain"
                    />
                    <Text style={styles.brandName}>{brand.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* List View (Detailed) */}
            {viewMode === 'list' && (
              <View style={styles.brandsList}>
                {filteredBrands.map((brand) => (
                  <TouchableOpacity
                    key={brand.id}
                    style={styles.brandListItem}
                    onPress={() => router.push(`/pages/brandDetail/${brand.id}`)}
                  >
                    <Image
                      source={{ uri: brand.logo }}
                      style={styles.brandListLogo}
                      resizeMode="contain"
                    />
                    <View style={styles.brandListInfo}>
                      <Text style={styles.brandListName}>{brand.name}</Text>
                      <View style={styles.brandListMeta}>
                        <Text style={styles.brandListWatches}>24 Watches</Text>
                        <View style={styles.brandListRating}>
                          <Ionicons name="star" size={14} color="#FDB022" />
                          <Text style={styles.brandListRatingText}>4.9</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}