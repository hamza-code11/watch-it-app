import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./Hero.styles";

const Hero = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <LinearGradient
      colors={["#1A1A2E", "#16213E", "#0F0F1A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.banner}
    >
      {/* Background Watch Image */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1612771409641-b0478cab8b69?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.watchImageBg}
        resizeMode="cover"
      />

      {/* Fade Overlay */}
      <LinearGradient
        colors={[
          "rgba(10, 10, 20, 1)",
          "rgba(10, 10, 20, 0.95)",
          "rgba(10, 10, 20, 0.3)",
          "rgba(10, 10, 20, 0.1)",
        ]}
        locations={[0, 0.4, 0.75, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.fadeOverlay}
      />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.label}>Dubai's Trusted Watch Marketplace</Text>

        {/* ✅ Text Order Changed */}
        <Text style={styles.title}>
          <Text style={styles.titleHighlight}>FIND. SWIPE. OWN.</Text>
          {"\n"}
          Trade Timepieces.
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity activeOpacity={0.85} style={styles.ctaWrapper}>
            <LinearGradient
              colors={["#FFFFFF", "#E8EDF5", "#D5DCE8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.ctaButton}
            >
              <Text style={styles.ctaText}>Discover Timepieces</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.85} style={styles.secondaryWrapper}>
            <LinearGradient
              colors={["#FFFFFF", "#E8EDF5", "#D5DCE8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.ctaButton}
            >
              <Text style={styles.secondaryText}>+ List Your Watch</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Hero;

