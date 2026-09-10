import { Text, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./Stats.styles";

const statsData = [
  {
    id: 1,
    number: "AED 50+",
    label: "WATCHES LISTED",
  },
  {
    id: 2,
    number: "100%",
    label: "SELLER VERIFIED",
  },
  {
    id: 3,
    number: "7 Emirates",
    label: "UAE COVERAGE",
  },
  {
    id: 4,
    number: "24/7",
    label: "LIVE AUCTIONS",
  },
];

const Stats = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      {statsData.map((stat) => (
        <View key={stat.id} style={styles.statBox}>
          <Text style={styles.statNumber}>{stat.number}</Text>
          <Text style={styles.statLabel}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default Stats;

