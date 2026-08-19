import { useEffect, useRef } from "react";
import { Animated, Easing, Text, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./BrandStrip.styles";

const BRANDS = [
  "Rolex",
  "Omega",
  "Patek Philippe",
  "Audemars Piguet",
  "Cartier",
  "Tudor",
  "IWC",
  "Panerai",
  "Breitling",
  "TAG Heuer",
];

const LOOP_BRANDS = [...BRANDS, ...BRANDS];

const ITEM_ESTIMATED_WIDTH = 95; // chhota font + kam gap = kam width per item
const SCROLL_DURATION_PER_ITEM = 3800; // slower speed

const BrandStrip = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const totalDistance = ITEM_ESTIMATED_WIDTH * BRANDS.length;
    const totalDuration = SCROLL_DURATION_PER_ITEM * BRANDS.length;

    const animate = () => {
      translateX.setValue(0);
      Animated.timing(translateX, {
        toValue: -totalDistance,
        duration: totalDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) animate();
      });
    };

    animate();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.row, { transform: [{ translateX }] }]}>
        {LOOP_BRANDS.map((brand, index) => (
          <View key={`${brand}-${index}`} style={styles.chip}>
            <Text style={styles.chipText}>{brand}</Text>
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

export default BrandStrip;

