import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getPartnersStyles } from './Partners.style';
import { partnersData } from '../../data/about';

export default function Partners() {
  const { theme } = useTheme();
  const styles = getPartnersStyles(theme);

  return (
    <View style={styles.container}>
      {/* Label */}
      <Text style={styles.label}>{partnersData.label}</Text>

      {/* Title */}
      <Text style={styles.title}>{partnersData.title}</Text>

      {/* Description */}
      <Text style={styles.description}>{partnersData.description}</Text>

      {/* Brands Grid */}
      <View style={styles.grid}>
        {partnersData.brands.map((brand) => (
          <View key={brand} style={styles.brandItem}>
            <Text style={styles.brandText}>{brand}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}