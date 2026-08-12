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








import { useState } from "react";
import { View } from "react-native";

import Header from "../../../example/src/components/header/Header";
import Hero from "../../../example/src/components/Hero/Hero";
import QuickActions from "../../../example/src/components/QuickActions/QuickActions";
import Sidebar from "../../../example/src/components/sidebar/Sidebar";
// import ThemeToggle from "../../example/src/components/themetoggle/ThemeToggle";
import { useTheme } from "../../../example/src/context/ThemeContext";
import { getStyles } from "./index.styles";

const Index = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        onProfilePress={() => setSidebarVisible(true)}
      />

      <Hero />
      <QuickActions />
      <Sidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
    </View>
  );
};

export default Index;

