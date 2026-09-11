import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { VendorDetailData } from '../../types/vendorDetail.types';
import { getVendorBannerStyles } from './VendorBanner.style';

export default function VendorBanner({ vendor }: { vendor: VendorDetailData }) {
  const { theme } = useTheme();
  const styles = getVendorBannerStyles(theme);

  return (
    <View style={styles.banner}>
      {/* Top Row (Logo + Name + Address + Description) */}
      <View style={styles.topRow}>
        <View style={styles.logoContainer}>
          <Image source={{ uri: vendor.logo }} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.infoContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text style={styles.vendorName}>{vendor.name}</Text>
            {vendor.isVerified && (
              <View style={styles.verifiedBadge}>
                <Ionicons name="checkmark" size={10} color="#FFFFFF" />
              </View>
            )}
          </View>
          <Text style={styles.vendorDescription}>{vendor.description}</Text>
          <Text style={styles.vendorAddress}>{vendor.address}</Text>
        </View>
      </View>

      {/* Stats Row (3 Columns: Ratings, Products, Since) */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{vendor.rating}</Text>
          <Text style={styles.statLabel}>Ratings</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{vendor.productsCount}</Text>
          <Text style={styles.statLabel}>Products</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>2018</Text>
          <Text style={styles.statLabel}>Since</Text>
        </View>
      </View>
    </View>
  );
}