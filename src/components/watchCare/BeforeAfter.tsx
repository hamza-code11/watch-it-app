import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getBeforeAfterStyles } from './BeforeAfter.style';

// Mock Data (Aap isay data file se bhi fetch kar sakte hain)
const beforeAfterData = [
  {
    id: 1,
    title: 'Rolex Submariner',
    description: 'Full PPF protection and polishing',
    beforeImage: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
    beforeLabel: 'Before',
    afterLabel: 'After',
  },
  {
    id: 2,
    title: 'Audemars Piguet Royal Oak',
    description: 'Complete servicing and expert polish',
    beforeImage: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=800&auto=format&fit=crop',
    beforeLabel: 'Before',
    afterLabel: 'After',
  },
  {
    id: 3,
    title: 'Patek Philippe Nautilus',
    description: 'Luxury concierge service and cleaning',
    beforeImage: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
    beforeLabel: 'Before',
    afterLabel: 'After',
  },
];

export default function BeforeAfter() {
  const { theme } = useTheme();
  const styles = getBeforeAfterStyles(theme);

  return (
    <View style={styles.container}>
      {/* Section Heading */}
      <Text style={styles.sectionHeading}>Before & After</Text>
      <Text style={styles.sectionSubtitle}>See the transformation</Text>

      {/* Cards */}
      {beforeAfterData.map((item) => (
        <View key={item.id} style={styles.card}>
          {/* Images Row */}
          <View style={styles.imageRow}>
            {/* Before Image */}
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.beforeImage }} style={styles.image} resizeMode="cover" />
              <View style={styles.imageLabel}>
                <Text style={styles.imageLabelText}>{item.beforeLabel}</Text>
              </View>
            </View>

            {/* Center Arrow (White Background, Dark Arrow) */}
            <View style={styles.centerArrow}>
              <Ionicons name="arrow-forward" size={20} color="#000000" />
            </View>

            {/* After Image */}
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.afterImage }} style={styles.image} resizeMode="cover" />
              <View style={styles.imageLabel}>
                <Text style={styles.imageLabelText}>{item.afterLabel}</Text>
              </View>
            </View>
          </View>

          {/* Watch Info */}
          <View style={styles.watchInfo}>
            <Text style={styles.watchName}>{item.title}</Text>
            <Text style={styles.watchDescription}>{item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

