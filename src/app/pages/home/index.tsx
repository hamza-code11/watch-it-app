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

import BrandStrip from "../../../components/BrandStrip/BrandStrip";
import ChronosGold from "../../../components/ChronosGold/ChronosGold";
import CommunityReferral from "../../../components/CommunityReferral/CommunityReferral";
import ForSellers from "../../../components/ForSellers/ForSellers";
import Hero from "../../../components/Hero/Hero";
import JustDropped from "../../../components/JustDropped/JustDropped";
import QuickActions from "../../../components/QuickActions/QuickActions";
import SearchBar from "../../../components/SearchBar/SearchBar";

import { useTheme } from "../../../context/ThemeContext";
import { getStyles } from "../../../screens/Home/Home.styles";

const Index = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: 70,
        paddingBottom: 100,
      }}
      showsVerticalScrollIndicator={false}
    >
      <SearchBar onSearch={handleSearch} placeholder="Search for watches, brands..." />
      <Hero />
      <BrandStrip />
      <QuickActions />
      <JustDropped />
      <ForSellers />
      <ChronosGold />
      <CommunityReferral />
    </ScrollView>
  );
};

export default Index;