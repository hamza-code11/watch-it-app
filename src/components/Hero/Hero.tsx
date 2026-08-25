// components/Hero/Hero.tsx
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";
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
      <View style={styles.content}>
        <Text style={styles.label}>Dubai's Trusted Watch Marketplace</Text>
        
        <Text style={styles.title}>
          Trade Timepieces.
          {"\n"}
          <Text style={styles.titleHighlight}>FIND. SWIPE. OWN.</Text>
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
              colors={["rgba(255,255,255,0.08)", "rgba(255,255,255,0.02)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.secondaryButton}
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








// // components/Hero/Hero.tsx

// import { LinearGradient } from "expo-linear-gradient";
// import { Text, TouchableOpacity, View } from "react-native";

// import { useTheme } from "../../context/ThemeContext";
// import { useHero } from "./Hero.hooks";
// import { getStyles } from "./Hero.styles";

// const Hero = () => {
//   const { theme } = useTheme();
//   const styles = getStyles(theme);

//   const { data, isLoading, isError } = useHero();

//   if (isLoading) {
//     return null;
//   }

//   if (isError || !data) {
//     return null;
//   }

//   return (
//     <LinearGradient
//       colors={["#1A1A2E", "#16213E", "#0F0F1A"]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={styles.banner}
//     >
//       <View style={styles.content}>

//         <Text style={styles.label}>
//           {data.label}
//         </Text>

//         <Text style={styles.title}>
//           {data.title}
//           {"\n"}
//           <Text style={styles.titleHighlight}>
//             {data.titleHighlight}
//           </Text>
//         </Text>

//         <View style={styles.buttonRow}>

//           <TouchableOpacity
//             activeOpacity={0.85}
//             style={styles.ctaWrapper}
//           >
//             <LinearGradient
//               colors={["#FFFFFF", "#E8EDF5", "#D5DCE8"]}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 1 }}
//               style={styles.ctaButton}
//             >
//               <Text style={styles.ctaText}>
//                 {data.primaryButtonText}
//               </Text>
//             </LinearGradient>
//           </TouchableOpacity>

//           <TouchableOpacity
//             activeOpacity={0.85}
//             style={styles.secondaryWrapper}
//           >
//             <LinearGradient
//               colors={[
//                 "rgba(255,255,255,0.08)",
//                 "rgba(255,255,255,0.02)",
//               ]}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 1 }}
//               style={styles.secondaryButton}
//             >
//               <Text style={styles.secondaryText}>
//                 {data.secondaryButtonText}
//               </Text>
//             </LinearGradient>
//           </TouchableOpacity>

//         </View>
//       </View>
//     </LinearGradient>
//   );
// };

// export default Hero;
