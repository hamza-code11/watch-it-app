import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./ForSellers.styles";

const sellerImage = require("@/assets/seller-image.png");

const ForSellers = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const handleLearnMore = () => {
    console.log("Learn More pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Left Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>List Your Watches</Text>

          <Text style={styles.description}>
            List in minutes. Get reviewed, reach UAE collectors, and pay only when you sell...
          </Text>

          <TouchableOpacity
            onPress={handleLearnMore}
            activeOpacity={0.85}
          >
            <LinearGradient
              colors={["#FFFFFF", "#E9EEF6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Ionicons name="add" size={18} color="#0B0E14" />
              <Text style={styles.buttonText}>Create Listing</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Right Image */}
        <View style={styles.imageContainer}>
          <Image
            source={sellerImage}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

export default ForSellers;