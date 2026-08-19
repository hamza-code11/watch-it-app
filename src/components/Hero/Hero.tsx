import { useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./Hero.styles";

const banners = [
  require("@/assets/01.webp"),
  require("@/assets/02.webp"),
  require("@/assets/03.webp"),
];

// Har banner ke liye alag content — agar sab pe same chahiye to ek hi rakh lo
const bannerContent = [
  {
    label: "FEATURED DROP",
    title: "Two-Tone Icons",
    cta: "Shop the edit",
  },
  {
    label: "NEW ARRIVAL",
    title: "Timeless Classics",
    cta: "Explore collection",
  },
  {
    label: "LIMITED EDITION",
    title: "Rare Finds",
    cta: "View pieces",
  },
];

const Hero = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % banners.length;
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex(nextIndex);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }).start();
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const content = bannerContent[currentIndex];

  return (
    <View style={styles.banner}>
      <Animated.Image
        source={banners[currentIndex]}
        style={[styles.bannerImage, { opacity: fadeAnim }]}
        resizeMode="cover"
      />

      {/* Dark gradient overlay - bottom se upar ki taraf fade */}
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.25)", "rgba(0,0,0,0.75)"]}
        locations={[0, 0.5, 1]}
        style={styles.gradientOverlay}
      />

      {/* Text content overlay */}
      <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
        <Text style={styles.label}>{content.label}</Text>
        <Text style={styles.title}>{content.title}</Text>
        <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
          <Text style={styles.ctaText}>{content.cta}</Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.dotsContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default Hero;

