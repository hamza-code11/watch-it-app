// src/components/SplashScreenView/SplashScreenView.tsx
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Animated, StyleProp, Text, View, ViewStyle } from "react-native";
import { styles } from "./SplashScreenView.styles";

type Props = {
  onFinish: () => void;
  onLayout?: () => void;
  style?: StyleProp<ViewStyle>;
};

const SplashScreenView = ({ onFinish, onLayout, style }: Props) => {
  const progress = useRef(new Animated.Value(0)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    Animated.timing(progress, {
      toValue: 1,
      duration: 2200,
      useNativeDriver: false,
    }).start(() => {
      onFinish();
    });
  }, []);

  const widthInterpolate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["30%", "100%"],
  });

  return (
    <LinearGradient
      colors={["#0a1628", "#0d1b2e", "#050a18"]}
      start={{ x: 0.3, y: 0 }}
      end={{ x: 0.7, y: 1 }}
      style={[styles.container, style]}
      onLayout={onLayout}
    >
      <Animated.View style={[styles.content, { opacity: fade }]}>
        <Text style={styles.title}>WATCH IT</Text>
        <Text style={styles.subtitle}>UAE · LUXURY TIMEPIECES</Text>

        <View style={styles.divider} />

        <Text style={styles.tagline}>Buy. Sell. Trade Timepieces.</Text>
      </Animated.View>

      <Animated.View style={[styles.footer, { opacity: fade }]}>
        <View style={styles.kycRow}>
          <Ionicons name="shield-checkmark-outline" size={12} color="#8bbdd9" />
          <Text style={styles.kycText}>KYC verified sellers · AED escrow</Text>
        </View>

        <View style={styles.progressTrack}>
          <Animated.View style={[styles.progressBar, { width: widthInterpolate }]} />
        </View>
      </Animated.View>
    </LinearGradient>
  );
};

export default SplashScreenView;

