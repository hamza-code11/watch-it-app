// app/pages/swipe/index.tsx
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "../../../context/ThemeContext";
import { AUTHENTICATION_STATUS, BRANDS, CONDITIONS, EMIRATES } from "../../../data/filtersData";
import { WATCHES as ALL_WATCHES, getWatches } from "../../../data/watchesData";
import { getStyles } from "../../../screens/Swipe/Swipe.styles";
import { FilterOptions } from "../../../types/filters";
import { Watch } from "../../../types/watch";

const { width } = Dimensions.get("window");

const goldStyles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  card: {
    backgroundColor: '#0D0F1A',
    borderWidth: 1,
    borderRadius: 24,
    padding: 22,
    alignItems: 'center',
  },
  crownWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(253,176,34,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  title: {
    color: '#F5F5FA',
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'Georgia',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#8C8FAD',
    fontSize: 12.5,
    lineHeight: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#1E2038',
    marginBottom: 16,
  },
  benefitsLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
  },
  benefitsLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  benefitCell: {
    width: '48%',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
    backgroundColor: 'rgba(253,176,34,0.04)',
  },
  benefitText: {
    color: '#E8E8E8',
    fontSize: 11,
    fontWeight: '600',
    flex: 1,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 999,
  },
  ctaText: {
    color: '#0B0E14',
    fontSize: 14,
    fontWeight: '700',
  },
  disclaimer: {
    color: '#5C5F7D',
    fontSize: 11,
    marginTop: 10,
  },
});

const SwipePage = () => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = getStyles(theme, insets);
  const router = useRouter();

  // Track swiped items — scoped to this component instance, not module-level.
  // Module-level state persisted across Fast Refresh / remounts and caused
  // stale indices to collide, producing duplicate React keys and crashes.
  const swipedItems = useRef<Set<string>>(new Set());

  // State
  const [watches, setWatches] = useState<Watch[]>(ALL_WATCHES);
  const [index, setIndex] = useState(0);
  const [currentWatch, setCurrentWatch] = useState<Watch | null>(watches[0] || null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [resultsCount, setResultsCount] = useState(watches.length);
  const [filters, setFilters] = useState<FilterOptions>({
    model: '',
    brands: [],
    emirates: [],
    conditions: [],
    priceMin: '',
    priceMax: '',
    yearFrom: '',
    yearTo: '',
    authenticationStatus: 'any',
    boxPapersOnly: false,
    tradeAcceptedOnly: false,
  });

  // Animation refs
  const translateX = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  // Reset animations on index change
  useEffect(() => {
    translateX.setValue(0);
    rotate.setValue(0);
    opacity.setValue(1);
  }, [index]);

  // Apply filters
  const applyFilters = () => {
    const filtered = getWatches(filters);
    swipedItems.current.clear();
    setWatches(filtered);
    setResultsCount(filtered.length);
    setIndex(0);
    if (filtered.length > 0) setCurrentWatch(filtered[0]);
    setShowFilters(false);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      model: '',
      brands: [],
      emirates: [],
      conditions: [],
      priceMin: '',
      priceMax: '',
      yearFrom: '',
      yearTo: '',
      authenticationStatus: 'any',
      boxPapersOnly: false,
      tradeAcceptedOnly: false,
    });
    swipedItems.current.clear();
    setWatches(ALL_WATCHES);
    setResultsCount(ALL_WATCHES.length);
    setIndex(0);
    setCurrentWatch(ALL_WATCHES[0] || null);
  };

  // Get next available index
  const getNextAvailableIndex = (startIndex: number, direction: number) => {
    let nextIndex = startIndex;
    let attempts = 0;
    const total = watches.length;
    if (total === 0) return startIndex;

    do {
      nextIndex = (nextIndex + direction + total) % total;
      attempts++;
      if (attempts > total) break;
    } while (watches[nextIndex] && swipedItems.current.has(watches[nextIndex].id) && attempts < total);

    return nextIndex;
  };

  // Perform swipe animation
  const performSwipe = (direction: 'left' | 'right') => {
    if (isAnimating || watches.length === 0 || !currentWatch) return;

    swipedItems.current.add(currentWatch.id);
    setIsAnimating(true);

    const toValue = direction === 'left' ? -width : width;
    const rotateValue = direction === 'left' ? -15 : 15;

    Animated.parallel([
      Animated.timing(translateX, {
        toValue,
        duration: 400,
        useNativeDriver: false
      }),
      Animated.timing(rotate, {
        toValue: rotateValue,
        duration: 400,
        useNativeDriver: false
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }),
    ]).start(() => {
      const nextIndex = getNextAvailableIndex(index, 1);
      if (nextIndex !== index && nextIndex < watches.length && watches[nextIndex]) {
        setIndex(nextIndex);
        setCurrentWatch(watches[nextIndex]);
      } else {
        // Check if there are any non-swiped items left
        const remaining = watches.filter(w => !swipedItems.current.has(w.id));
        if (remaining.length > 0) {
          const newIndex = watches.indexOf(remaining[0]);
          setIndex(newIndex);
          setCurrentWatch(watches[newIndex]);
        } else {
          setCurrentWatch(null);
        }
      }
      setIsAnimating(false);
    });
  };

  // Handlers
  const handlePass = () => { if (!isAnimating) performSwipe('left'); };
  const handleInterest = () => { if (!isAnimating) performSwipe('right'); };

  const rotateInterpolate = rotate.interpolate({
    inputRange: [-15, 0, 15],
    outputRange: ['-15deg', '0deg', '15deg'],
  });

  // No more items view — Gold upgrade / premium collector screen
  if (swipedItems.current.size >= watches.length || watches.length === 0 || !currentWatch) {
    if (watches.length === 0) {
      return (
        <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
          <Ionicons name="search-outline" size={48} color={theme.textMuted} />
          <Text style={{ color: theme.textPrimary, fontSize: 20, fontWeight: '700', marginTop: 16 }}>No watches found</Text>
          <Text style={{ color: theme.textMuted, fontSize: 14, marginTop: 8, textAlign: 'center' }}>
            No watches match your filters
          </Text>
          <TouchableOpacity onPress={resetFilters} style={{ marginTop: 16 }}>
            <Text style={{ color: theme.accentPrimary, fontSize: 14, fontWeight: '600' }}>Reset Filters</Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
    }

    const benefits = [
      { icon: 'flash-outline', label: 'Unlimited Swipes' },
      { icon: 'storefront-outline', label: 'Full Vendor Shop Browsing' },
      { icon: 'bag-outline', label: 'Complete Shop Inventory' },
      { icon: 'grid-outline', label: 'Shop Categories' },
      { icon: 'time-outline', label: 'New Arrivals' },
      { icon: 'options-outline', label: 'Advanced Filters' },
      { icon: 'bookmark-outline', label: 'Saved Searches' },
      { icon: 'notifications-outline', label: 'Price Alerts' },
      { icon: 'arrow-undo-outline', label: 'Undo Swipe' },
      { icon: 'star-outline', label: 'Gold-Only Listings' },
      { icon: 'sparkles-outline', label: 'Gold First Releases' },
      { icon: 'shield-checkmark-outline', label: 'Gold Badge' },
    ] as const;

    return (
      <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
        <ScrollView contentContainerStyle={goldStyles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={[goldStyles.card, { borderColor: theme.borderColor }]}>
            <View style={goldStyles.crownWrap}>
              <Ionicons name="trophy-outline" size={30} color={theme.warning} />
            </View>

            <Text style={goldStyles.title}>
              Premium <Text style={{ color: theme.warning }}>Collector</Text> Experience
            </Text>
            <Text style={goldStyles.subtitle}>
              You've discovered {watches.length} exceptional timepieces today. There are thousands more waiting for
              you. Continue your journey with Gold and unlock the full collector experience.
            </Text>

            <View style={goldStyles.divider} />

            <View style={goldStyles.benefitsLabelRow}>
              <Ionicons name="star" size={13} color={theme.warning} />
              <Text style={[goldStyles.benefitsLabel, { color: theme.warning }]}>GOLD BENEFITS</Text>
            </View>

            <View style={goldStyles.grid}>
              {benefits.map((b) => (
                <View key={b.label} style={[goldStyles.benefitCell, { borderColor: 'rgba(253,176,34,0.25)' }]}>
                  <Ionicons name={b.icon as any} size={16} color={theme.warning} />
                  <Text style={goldStyles.benefitText}>{b.label}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity activeOpacity={0.85} onPress={() => router.push('/pages/gold' as any)}>
              <LinearGradient
                colors={["#D4AF37", "#F7E7B4", "#D4AF37"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={goldStyles.ctaButton}
              >
                <Ionicons name="sparkles" size={16} color="#0B0E14" />
                <Text style={goldStyles.ctaText}>Unlock Premium Collection</Text>
                <Ionicons name="chevron-forward" size={16} color="#0B0E14" />
              </LinearGradient>
            </TouchableOpacity>

            <Text style={goldStyles.disclaimer}>No commitment required. Cancel anytime.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()} style={styles.headerAction}>
            <Ionicons name="arrow-back" size={22} color={theme.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Swipe Discovery</Text>
          <View style={styles.headerRight}>
            <Text style={styles.headerCount}>{watches.filter(w => !swipedItems.current.has(w.id)).length} left</Text>
            <TouchableOpacity onPress={() => setShowFilters(true)} style={styles.headerAction}>
              <Ionicons name="options-outline" size={22} color={theme.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Swipe Card */}
      <View style={styles.cardContainer}>
        {watches.length > 0 && currentWatch && (
          <Animated.View
            style={[
              styles.cardWrapper,
              {
                transform: [{ translateX }, { rotate: rotateInterpolate }],
                opacity,
              }
            ]}
          >
            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => router.push(`/product/${currentWatch.id}` as any)}
              style={styles.card}
            >
              <Image source={{ uri: currentWatch.image }} style={styles.cardImage} resizeMode="cover" />
              <LinearGradient colors={["transparent", "rgba(0,0,0,0.85)"]} style={styles.cardOverlay} />

              <View style={styles.cardContent}>
                <Text style={styles.cardBrand}>{currentWatch.brand}</Text>
                <Text style={styles.cardName}>{currentWatch.name}</Text>
                <View style={styles.cardMeta}>
                  <Ionicons name="location-outline" size={12} color="rgba(255,255,255,0.7)" />
                  <Text style={styles.cardMetaText}>{currentWatch.location}</Text>
                  <View style={styles.metaDot} />
                  <Text style={styles.cardMetaText}>{currentWatch.year}</Text>
                  <View style={styles.metaDot} />
                  <Text style={styles.cardMetaText}>{currentWatch.condition}</Text>
                  <View style={styles.metaDot} />
                  <Text style={styles.cardMetaText}>{currentWatch.reference}</Text>
                </View>
                <Text style={styles.cardPrice}>{currentWatch.price} AED</Text>
              </View>
            </TouchableOpacity>

            {/* Action Buttons */}
            <View style={styles.actionRow}>
              <TouchableOpacity style={[styles.actionBtn, styles.passBtn]} onPress={handlePass} disabled={isAnimating}>
                <Ionicons name="close" size={24} color="#FF6B6B" />
                <Text style={styles.passText}>Pass</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionBtn, styles.interestBtn]} onPress={handleInterest} disabled={isAnimating}>
                <Ionicons name="heart" size={24} color="#4F9FFF" />
                <Text style={styles.interestText}>Interest</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
      </View>

      {/* Filters Modal */}
      <Modal visible={showFilters} animationType="slide" transparent onRequestClose={() => setShowFilters(false)}>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { paddingBottom: insets.bottom + 20 }]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filters</Text>
              <TouchableOpacity onPress={() => setShowFilters(false)}>
                <Ionicons name="close" size={24} color={theme.textPrimary} />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Model */}
              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Model</Text>
                <View style={styles.searchInput}>
                  <Ionicons name="search-outline" size={18} color={theme.textMuted} />
                  <TextInput
                    placeholder="Search model"
                    placeholderTextColor={theme.textMuted}
                    style={styles.searchInputText}
                    value={filters.model}
                    onChangeText={(text) => setFilters({ ...filters, model: text })}
                  />
                </View>
              </View>

              {/* Brand */}
              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Brand</Text>
                {BRANDS.map((brand) => (
                  <TouchableOpacity
                    key={brand.id}
                    style={styles.brandItem}
                    onPress={() => {
                      const updated = filters.brands.includes(brand.name)
                        ? filters.brands.filter(b => b !== brand.name)
                        : [...filters.brands, brand.name];
                      setFilters({ ...filters, brands: updated });
                    }}
                  >
                    <Text style={[styles.brandText, filters.brands.includes(brand.name) && { color: theme.accentPrimary, fontWeight: '600' }]}>
                      {brand.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Emirate */}
              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Emirate</Text>
                <View style={styles.chipsRow}>
                  {EMIRATES.map((emirate) => (
                    <TouchableOpacity
                      key={emirate}
                      style={[styles.chip, filters.emirates.includes(emirate) && styles.chipActive]}
                      onPress={() => {
                        const updated = filters.emirates.includes(emirate)
                          ? filters.emirates.filter(e => e !== emirate)
                          : [...filters.emirates, emirate];
                        setFilters({ ...filters, emirates: updated });
                      }}
                    >
                      <Text style={[styles.chipText, filters.emirates.includes(emirate) && styles.chipTextActive]}>
                        {emirate}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Condition */}
              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Condition</Text>
                <View style={styles.chipsRow}>
                  {CONDITIONS.map((condition) => (
                    <TouchableOpacity
                      key={condition}
                      style={[styles.chip, filters.conditions.includes(condition) && styles.chipActive]}
                      onPress={() => {
                        const updated = filters.conditions.includes(condition)
                          ? filters.conditions.filter(c => c !== condition)
                          : [...filters.conditions, condition];
                        setFilters({ ...filters, conditions: updated });
                      }}
                    >
                      <Text style={[styles.chipText, filters.conditions.includes(condition) && styles.chipTextActive]}>
                        {condition}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Price */}
              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Price (AED)</Text>
                <View style={styles.priceRow}>
                  <View style={styles.priceInput}>
                    <TextInput
                      placeholder="Min"
                      placeholderTextColor={theme.textMuted}
                      keyboardType="numeric"
                      style={styles.priceInputText}
                      value={filters.priceMin}
                      onChangeText={(text) => setFilters({ ...filters, priceMin: text })}
                    />
                  </View>
                  <Text style={styles.priceSeparator}>—</Text>
                  <View style={styles.priceInput}>
                    <TextInput
                      placeholder="Max"
                      placeholderTextColor={theme.textMuted}
                      keyboardType="numeric"
                      style={styles.priceInputText}
                      value={filters.priceMax}
                      onChangeText={(text) => setFilters({ ...filters, priceMax: text })}
                    />
                  </View>
                </View>
              </View>

              {/* Year */}
              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Year</Text>
                <View style={styles.yearRow}>
                  <View style={styles.yearInput}>
                    <TextInput
                      placeholder="From"
                      placeholderTextColor={theme.textMuted}
                      keyboardType="numeric"
                      style={styles.yearInputText}
                      value={filters.yearFrom}
                      onChangeText={(text) => setFilters({ ...filters, yearFrom: text })}
                    />
                  </View>
                  <Text style={styles.yearSeparator}>—</Text>
                  <View style={styles.yearInput}>
                    <TextInput
                      placeholder="To"
                      placeholderTextColor={theme.textMuted}
                      keyboardType="numeric"
                      style={styles.yearInputText}
                      value={filters.yearTo}
                      onChangeText={(text) => setFilters({ ...filters, yearTo: text })}
                    />
                  </View>
                </View>
              </View>

              {/* Authentication Status */}
              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Authentication Status</Text>
                <View style={styles.chipsRow}>
                  {AUTHENTICATION_STATUS.map((status) => (
                    <TouchableOpacity
                      key={status}
                      style={[styles.chip, filters.authenticationStatus === status.toLowerCase() && styles.chipActive]}
                      onPress={() => setFilters({ ...filters, authenticationStatus: status.toLowerCase() as 'any' | 'verified' | 'unverified' })}
                    >
                      <Text style={[styles.chipText, filters.authenticationStatus === status.toLowerCase() && styles.chipTextActive]}>
                        {status}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Box & Papers only */}
              <View style={styles.filterSection}>
                <TouchableOpacity style={styles.toggleRow} onPress={() => setFilters({ ...filters, boxPapersOnly: !filters.boxPapersOnly })}>
                  <View style={[styles.toggleBox, filters.boxPapersOnly && styles.toggleBoxActive]}>
                    {filters.boxPapersOnly && <Ionicons name="checkmark" size={12} color="#FFFFFF" />}
                  </View>
                  <Text style={styles.toggleText}>Box & Papers only</Text>
                </TouchableOpacity>
              </View>

              {/* Trade Accepted only */}
              <View style={styles.filterSection}>
                <TouchableOpacity style={styles.toggleRow} onPress={() => setFilters({ ...filters, tradeAcceptedOnly: !filters.tradeAcceptedOnly })}>
                  <View style={[styles.toggleBox, filters.tradeAcceptedOnly && styles.toggleBoxActive]}>
                    {filters.tradeAcceptedOnly && <Ionicons name="checkmark" size={12} color="#FFFFFF" />}
                  </View>
                  <Text style={styles.toggleText}>Trade Accepted only</Text>
                </TouchableOpacity>
              </View>

              {/* Filter Actions */}
              <View style={styles.filterActions}>
                <TouchableOpacity style={styles.resetBtn} onPress={resetFilters}>
                  <Text style={styles.resetText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.showBtn} onPress={applyFilters}>
                  <LinearGradient colors={["#D4AF37", "#F7E7B4", "#D4AF37"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.showGradient}>
                    <Text style={styles.showText}>Show {resultsCount} results</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SwipePage;