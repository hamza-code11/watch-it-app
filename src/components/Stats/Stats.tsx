// components/Stats/Stats.tsx
import { View, Text } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./Stats.styles";

const Stats = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.statBox}>
        <Text style={styles.statNumber}>35</Text>
        <Text style={styles.statLabel}>LISTINGS</Text>
      </View>

      <View style={styles.statBox}>
        <Text style={styles.statNumber}>5</Text>
        <Text style={styles.statLabel}>SWIPES LEFT</Text>
      </View>

      <View style={styles.statBox}>
        <Text style={styles.statNumber}>24/7</Text>
        <Text style={styles.statLabel}>AUCTIONS</Text>
      </View>
    </View>
  );
};

export default Stats;

