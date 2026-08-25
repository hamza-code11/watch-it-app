// import { Link } from "expo-router";
// import { Text, View } from "react-native";

// const Index = () =>{
//   return(
//     <View style={{backgroundColor: "blue", flex: 1, justifyContent: "center", alignItems: "center"}}>
//       <Text style={{fontSize: 40, color: "white", fontWeight: 700}}>This is Home Page</Text>


//       <Link href={"/about"}>Go to About</Link>
//     </View>
//   );
// };

// export default Index;













// app/index.tsx
import { ScrollView } from "react-native";

import ChronosGold from "../../../components/WatchItGold/WatchItGold";
import CommunityReferral from "../../../components/CommunityReferral/CommunityReferral";
import EverythingInOnePlace from "../../../components/EverythingInOnePlace/EverythingInOnePlace";
import ForSellers from "../../../components/ForSellers/ForSellers";
import Hero from "../../../components/Hero/Hero";
import HowItWorks from "../../../components/HowItWorks/HowItWorks";
import JustDropped from "../../../components/JustDropped/JustDropped";
import QuickActions from "../../../components/QuickActions/QuickActions";
import Stats from "../../../components/Stats/Stats";

import { useTheme } from "../../../context/ThemeContext";
import { getStyles } from "../../../screens/Home/Home.styles";

const Index = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);



  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: 70,
        paddingBottom: 100,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Hero />
      <Stats />
      <HowItWorks />
      <QuickActions />
      <JustDropped />
      <EverythingInOnePlace />
      <ForSellers />
      <ChronosGold />
      <CommunityReferral />
    </ScrollView>
  );
};

export default Index;