import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getFilterSortBarStyles } from './FilterSortBar.style';

const sortOptions = [
  { id: 'low-to-high', label: 'Low to High' },
  { id: 'high-to-low', label: 'High to Low' },
  { id: 'newest', label: 'Newest First' },
  { id: 'top-rated', label: 'Top Rated' },
];

const movements = ['Automatic', 'Quartz', 'Mechanical'];
const straps = ['Stainless Steel', 'Leather', 'Rubber', 'Bracelet'];
const availabilities = ['In Stock', 'Pre-order', 'Out of Stock'];

export default function FilterSortBar() {
  const { theme } = useTheme();
  const styles = getFilterSortBarStyles(theme);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('low-to-high');
  const [filterVisible, setFilterVisible] = useState(false);
  const [priceValue, setPriceValue] = useState(0);
  const [selectedMovement, setSelectedMovement] = useState('');
  const [selectedStrap, setSelectedStrap] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');

  const toggleChip = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter((prev) => (prev === value ? '' : value));
  };

  const handleReset = () => {
    setPriceValue(0);
    setSelectedMovement('');
    setSelectedStrap('');
    setSelectedAvailability('');
  };

  return (
    <View>
      <View style={styles.container}>
        {/* Filters Button */}
        <TouchableOpacity style={styles.filterBtn} onPress={() => setFilterVisible(true)}>
          <Ionicons name="filter-outline" size={18} color={theme.textPrimary} />
          <Text style={styles.filterBtnText}>Filters</Text>
        </TouchableOpacity>

        {/* Sort By Button */}
        <TouchableOpacity style={styles.sortBtn} onPress={() => setSortOpen(!sortOpen)}>
          <Text style={styles.sortText}>
            Sort by: <Text style={styles.sortLabel}>{sortOptions.find((s) => s.id === selectedSort)?.label}</Text>
          </Text>
          <Ionicons name="chevron-down" size={16} color={theme.textMuted} />
        </TouchableOpacity>
      </View>

      {/* Sort Dropdown */}
      {sortOpen && (
        <View style={styles.dropdownContainer}>
          {sortOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[styles.dropdownItem, selectedSort === option.id && styles.dropdownItemSelected]}
              onPress={() => {
                setSelectedSort(option.id);
                setSortOpen(false);
              }}
            >
              <Text style={[styles.dropdownItemText, selectedSort === option.id && styles.dropdownItemTextSelected]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Filter Modal */}
      {filterVisible && (
        <Modal transparent visible animationType="slide" onRequestClose={() => setFilterVisible(false)}>
          <Pressable style={styles.overlay} onPress={() => setFilterVisible(false)}>
            <Pressable style={styles.filterModal} onPress={(e) => e.stopPropagation()}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Filters</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    {/* Reset Button */}
                    <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
                      <Ionicons name="refresh" size={14} color={theme.textPrimary} />
                      <Text style={styles.resetBtnText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setFilterVisible(false)}>
                      <Ionicons name="close" size={24} color={theme.textPrimary} />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Price Range (Slider) */}
                <Text style={styles.sectionTitle}>Price Range</Text>
                <View style={styles.sliderContainer}>
                  <View style={styles.sliderLabels}>
                    <Text style={styles.sliderMinMax}>0</Text>
                    <Text style={styles.sliderMinMax}>AED {priceValue}</Text>
                    <Text style={styles.sliderMinMax}>1.2K</Text>
                  </View>
                  <Slider
                    style={{ width: '100%', height: 40 }}
                    minimumValue={0}
                    maximumValue={1200}
                    value={priceValue}
                    onValueChange={setPriceValue}
                    minimumTrackTintColor={theme.accentPrimary}
                    maximumTrackTintColor={theme.borderColor}
                    thumbTintColor={theme.accentPrimary}
                  />
                </View>

                {/* Movement */}
                <Text style={styles.sectionTitle}>Movement</Text>
                <View style={styles.chipContainer}>
                  {movements.map((movement) => (
                    <TouchableOpacity
                      key={movement}
                      style={[styles.chip, selectedMovement === movement && styles.chipSelected]}
                      onPress={() => toggleChip(movement, setSelectedMovement)}
                    >
                      <Text style={[styles.chipText, selectedMovement === movement && styles.chipTextSelected]}>
                        {movement}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Strap */}
                <Text style={styles.sectionTitle}>Strap</Text>
                <View style={styles.chipContainer}>
                  {straps.map((strap) => (
                    <TouchableOpacity
                      key={strap}
                      style={[styles.chip, selectedStrap === strap && styles.chipSelected]}
                      onPress={() => toggleChip(strap, setSelectedStrap)}
                    >
                      <Text style={[styles.chipText, selectedStrap === strap && styles.chipTextSelected]}>
                        {strap}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Availability */}
                <Text style={styles.sectionTitle}>Availability</Text>
                <View style={styles.chipContainer}>
                  {availabilities.map((availability) => (
                    <TouchableOpacity
                      key={availability}
                      style={[styles.chip, selectedAvailability === availability && styles.chipSelected]}
                      onPress={() => toggleChip(availability, setSelectedAvailability)}
                    >
                      <Text style={[styles.chipText, selectedAvailability === availability && styles.chipTextSelected]}>
                        {availability}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Apply Button (White Gradient) */}
                <View style={styles.applyBtnWrapper}>
                  <LinearGradient
                    colors={['#FFFFFF', '#E5E7EB', '#D1D5DB']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.applyBtn}
                  >
                    <TouchableOpacity onPress={() => setFilterVisible(false)} style={{ flex: 1, alignItems: 'center' }}>
                      <Text style={styles.applyBtnText}>Apply Filters</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </ScrollView>
            </Pressable>
          </Pressable>
        </Modal>
      )}
    </View>
  );
}
