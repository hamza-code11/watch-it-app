import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./JustDropped.styles";

type Listing = {
  id: string;
  brand: string;
  price: string;
  location: string;
  badge: string;
  imageUrl: string;
  onPress?: () => void;
};

const listings: Listing[] = [
  {
    id: "1",
    brand: "Rolex",
    price: "AED 118,000",
    location: "Dubai Marina",
    badge: 'B+P',
    imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400",
  },
  {
    id: "2",
    brand: "Marinus",
    price: "AED 14,500",
    location: "Abu Dhabi",
    badge: 'B+P',
    imageUrl: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400",
  },
  {
    id: "3",
    brand: "IWC",
    price: "AED 32,900",
    location: "Sharjah",
    badge: '',
    imageUrl: "https://images.unsplash.com/photo-1495856458515-0637185db551?w=400",
  },
  {
    id: "4",
    brand: "Raymond Weil",
    price: "AED 9,200",
    location: "Ras Al Khaimah",
    badge: 'B+P',
    imageUrl: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400",
  },
];

const JustDropped = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Just Dropped</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.headerLink}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        {listings.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.85}
            onPress={item.onPress}
          >
            <View style={styles.imageWrapper}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />

              {item.badge && (
                <View style={styles.verifiedBadge}>
                  <Ionicons name="checkmark-circle" size={10} color={theme.success} />
                  <Text style={styles.verifiedText}>{item.badge}</Text>
                </View>
              )}

              <TouchableOpacity style={styles.favButton} activeOpacity={0.7}>
                <Ionicons name="heart-outline" size={14} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.info}>
              <Text style={styles.model} numberOfLines={1}>
                {item.brand}
              </Text>

              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.location} numberOfLines={1}>
                {item.location}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default JustDropped;

