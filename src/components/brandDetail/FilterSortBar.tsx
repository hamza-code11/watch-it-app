import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getFilterSortBarStyles } from './FilterSortBar.style';

export default function FilterSortBar() {
  const { theme } = useTheme();
  const styles = getFilterSortBarStyles(theme);

  return (
    <View style={styles.container}>
      {/* Filters Button */}
      <TouchableOpacity style={styles.filterBtn} onPress={() => console.log('Filters')}>
        <Ionicons name="filter-outline" size={18} color={theme.textPrimary} />
        <Text style={styles.filterBtnText}>Filters</Text>
      </TouchableOpacity>

      {/* Sort By Button */}
      <TouchableOpacity style={styles.sortBtn} onPress={() => console.log('Sort')}>
        <Text style={styles.sortText}>
          Sort by: <Text style={styles.sortLabel}>Popularity</Text>
        </Text>
        <Ionicons name="chevron-down" size={16} color={theme.textMuted} />
      </TouchableOpacity>
    </View>
  );
}
