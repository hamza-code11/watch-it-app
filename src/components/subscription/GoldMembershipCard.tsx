import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getGoldMembershipCardStyles } from './GoldMembershipCard.style';

export default function GoldMembershipCard() {
  const { theme } = useTheme();
  const styles = getGoldMembershipCardStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Background Glow (Gold Effect) */}
        <View style={styles.glowEffect} />

        {/* Card Header */}
        <View style={styles.cardHeader}>
          <View style={styles.crownContainer}>
            <Ionicons name="diamond" size={24} color="#FDB022" />
          </View>
          <View>
            <Text style={styles.cardTitle}>Watch It Gold</Text>
            <Text style={styles.cardSubtitle}>The UAE's premium collector membership</Text>
          </View>
        </View>

        {/* Price Section */}
        <View style={styles.priceRow}>
          <Text style={styles.currency}>AED</Text>
          <Text style={styles.price}>50</Text>
          <Text style={styles.priceUnit}>/mo</Text>
        </View>

        {/* Features */}
        <View style={styles.featuresRow}>
          <View style={styles.featureContainer}>
            <Ionicons name="refresh-outline" size={14} color="#8C8FAD" />
            <Text style={styles.featureText}>Cancel anytime</Text>
          </View>
          <View style={styles.featureContainer}>
            <Ionicons name="checkmark-circle" size={14} color="#8C8FAD" />
            <Text style={styles.featureText}>No commitment</Text>
          </View>
        </View>

        {/* Activate Gold Button */}
        <View style={styles.buttonWrapper}>
          <LinearGradient
            colors={['#FDB022', '#F79009', '#DC6803']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <TouchableOpacity onPress={() => console.log('Activate Gold')} style={{ flex: 1, alignItems: 'center' }}>
              <Text style={styles.buttonText}>Activate Gold</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}

