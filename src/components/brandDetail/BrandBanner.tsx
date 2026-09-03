import { Image, Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { BrandDetailData } from '../../types/brandDetail.types';
import { getBrandBannerStyles } from './BrandBanner.style';

export default function BrandBanner({ brand }: { brand: BrandDetailData }) {
  const { theme } = useTheme();
  const styles = getBrandBannerStyles(theme);

  return (
    <View style={styles.banner}>
      {/* Top Row (Logo + Title + Description) */}
      <View style={styles.topRow}>
        <View style={styles.logoContainer}>
          <Image source={{ uri: brand.logo }} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.brandName}>{brand.name}</Text>
          <Text style={styles.brandDescription}>{brand.description}</Text>
        </View>
      </View>

      {/* Stats Row (Neechy Full Width) */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{brand.stats.watches}</Text>
          <Text style={styles.statLabel}>Watches</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{brand.stats.vendors}</Text>
          <Text style={styles.statLabel}>Vendors</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{brand.stats.founded}</Text>
          <Text style={styles.statLabel}>Founded</Text>
        </View>
      </View>
    </View>
  );
}
