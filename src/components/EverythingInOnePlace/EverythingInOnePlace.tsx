// components/EverythingInOnePlace/EverythingInOnePlace.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./EverythingInOnePlace.styles";

const { width } = Dimensions.get("window");

const EverythingInOnePlace = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const router = useRouter();

  const cards = [
    {
      icon: "swap-horizontal-outline",
      title: "Swipe & Discover",
      description:
        "Browse hundreds of verified watches with a swipe. Filter by brand, price, and location. Express interest instantly — no back-and-forth emails.",
      tags: ["Brand Filters", "Price Range", "City Search", "Box & Papers"],
      variant: "blue",
      route: "/explore",
    },
    {
      icon: "hammer-outline",
      title: "Live Auctions",
      description:
        "Bid in real-time on rare and exclusive timepieces. Standard, flash, and exclusive auction formats. Place your bid in seconds from your phone.",
      tags: ["Real-time Bidding", "Flash Sales", "Exclusive Drops", "UAE Only"],
      variant: "orange",
      route: "/auction",
    },
    {
      icon: "chatbubble-outline",
      title: "Chat & Negotiate",
      description:
        "Once matched with a seller, chat directly inside the app. Negotiate price, ask for more photos, and close the deal — all in one place.",
      tags: ["Direct Messaging", "Photo Sharing", "Price Negotiation", "AED Escrow (Soon)"],
      variant: "green",
      route: "/messages",
    },
    {
      icon: "shield-checkmark-outline",
      title: "Watch Authentication",
      description:
        "Submit your watch for expert verification by certified UAE specialists. Receive a digital certificate you can share with buyers to command premium prices.",
      tags: ["From AED 150", "Remote or Physical", "Digital Certificate", "UAE Experts"],
      variant: "purple",
      route: "/watch-authentication",
    },
    {
      icon: "color-palette-outline",
      title: "PPF & Watch Care",
      description:
        "Protect your investment with premium PPF film, deep cleaning, polishing, and professional servicing. Extend the life and value of your timepiece.",
      tags: ["PPF Protection", "Deep Cleaning", "Polishing", "From AED 400"],
      variant: "pink",
      route: "/watch-care",
    },
    {
      icon: "people-outline",
      title: "UAE Watch Community",
      description:
        "Share your collection, discuss market trends, post editorial content, and connect with fellow collectors and dealers across the UAE and GCC.",
      tags: ["Showcase Posts", "Market News", "Collector Network", "GCC Wide"],
      variant: "cyan",
      route: "/community",
    },
  ];

  const getVariantColors = (variant: string) => {
    switch (variant) {
      case "blue":
        return {
          accent: "#4F9FFF",
          tagColor: "#4F9FFF",
          tagBg: "rgba(79,159,255,0.08)",
          tagBorder: "rgba(79,159,255,0.25)",
        };
      case "orange":
        return {
          accent: "#F59E0B",
          tagColor: "#F59E0B",
          tagBg: "rgba(245,158,11,0.08)",
          tagBorder: "rgba(245,158,11,0.25)",
        };
      case "green":
        return {
          accent: "#10B981",
          tagColor: "#10B981",
          tagBg: "rgba(16,185,129,0.08)",
          tagBorder: "rgba(16,185,129,0.25)",
        };
      case "purple":
        return {
          accent: "#8B5CF6",
          tagColor: "#8B5CF6",
          tagBg: "rgba(139,92,246,0.08)",
          tagBorder: "rgba(139,92,246,0.25)",
        };
      case "pink":
        return {
          accent: "#EC4899",
          tagColor: "#EC4899",
          tagBg: "rgba(236,72,153,0.08)",
          tagBorder: "rgba(236,72,153,0.25)",
        };
      case "cyan":
        return {
          accent: "#22D3EE",
          tagColor: "#22D3EE",
          tagBg: "rgba(34,211,238,0.08)",
          tagBorder: "rgba(34,211,238,0.25)",
        };
      default:
        return {
          accent: "#4F9FFF",
          tagColor: "#4F9FFF",
          tagBg: "rgba(79,159,255,0.08)",
          tagBorder: "rgba(79,159,255,0.25)",
        };
    }
  };

  const CARD_WIDTH = width * 0.78;
  const CARD_HEIGHT = 270;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Everything In One Place</Text>
        <Text style={styles.heading}>The Full Watch It Experience</Text>
        <Text style={styles.subheading}>
          From buying your next grail to protecting your current collection — we've built
          every tool a serious collector needs.
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        decelerationRate="fast"
        snapToInterval={CARD_WIDTH + 12}
        snapToAlignment="center"
      >
        {cards.map((card, index) => {
          const colors = getVariantColors(card.variant);
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.card,
                {
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  backgroundColor: theme.bgCard,
                  borderColor: colors.tagBorder,
                },
              ]}
              activeOpacity={0.85}
              onPress={() => router.push(card.route as any)}
            >
              <View style={styles.cardTop}>
                <View style={[styles.iconSquare, { backgroundColor: colors.accent }]}>
                  <Ionicons name={card.icon as any} size={20} color="#FFFFFF" />
                </View>
                <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
              </View>

              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardDescription} numberOfLines={5}>
                {card.description}
              </Text>

              <View style={styles.tagsRow}>
                {card.tags.map((tag, tagIndex) => (
                  <View
                    key={tagIndex}
                    style={[
                      styles.tag,
                      {
                        borderColor: colors.tagBorder,
                        backgroundColor: colors.tagBg,
                      },
                    ]}
                  >
                    <Text style={[styles.tagText, { color: colors.tagColor }]}>{tag}</Text>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default EverythingInOnePlace;

