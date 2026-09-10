import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./JustDropped.styles";

type Listing = {
  id: string;
  brand: string;
  price: string;
  location: string;
  badge: string;
  imageUrl: string;
};

const listings: Listing[] = [
  {
    id: "1",
    brand: "Rolex",
    price: "AED 118,000",
    location: "Dubai Marina",
    badge: "B+P",
    imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400",
  },
  {
    id: "2",
    brand: "Marinus",
    price: "AED 14,500",
    location: "Abu Dhabi",
    badge: "B+P",
    imageUrl: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400",
  },
  {
    id: "3",
    brand: "IWC",
    price: "AED 32,900",
    location: "Sharjah",
    badge: "",
    imageUrl: "https://images.unsplash.com/photo-1495856458515-0637185db551?w=400",
  },
  {
    id: "4",
    brand: "Raymond Weil",
    price: "AED 9,200",
    location: "Ras Al Khaimah",
    badge: "B+P",
    imageUrl: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400",
  },
  {
    id: "5",
    brand: "Omega",
    price: "AED 22,000",
    location: "Dubai",
    badge: "B+P",
    imageUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400",
  },
  {
    id: "6",
    brand: "TAG Heuer",
    price: "AED 12,500",
    location: "Abu Dhabi",
    badge: "",
    imageUrl: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400",
  },
];

const JustDropped = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const router = useRouter();

  const handleCardPress = () => {
    router.push("/pages/swipe" as any);
  };


  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Just Dropped</Text>
      </View>

      {/* ✅ Horizontal ScrollView */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {listings.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.85}
            onPress={handleCardPress}
          >
            <View style={styles.imageWrapper}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />

              {item.badge && (
                <View style={styles.verifiedBadge}>
                  <Ionicons name="checkmark-circle" size={10} color={theme.success} />
                  <Text style={styles.verifiedText}>{item.badge}</Text>
                </View>
              )}
            </View>

            <View style={styles.info}>
              <Text style={styles.brand} numberOfLines={1}>
                {item.brand}
              </Text>

              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.location} numberOfLines={1}>
                {item.location}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default JustDropped;
