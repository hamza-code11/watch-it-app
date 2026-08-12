// app/_layout.tsx
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabBar from "../../example/src/components/BottomTabBar/BottomTabBar";
import { ThemeProvider, useTheme } from "../../example/src/context/ThemeContext";

// 👇 Small inner component so useTheme() can run inside ThemeProvider
const AppStack = () => {
  const { theme } = useTheme();

  return (
    <Stack screenOptions={{ animation: "slide_from_right" }}>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ headerShown: false }} />
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          headerStyle: {
      backgroundColor: theme.bgPrimary,
    },
    headerTintColor: theme.textPrimary,       // back arrow + icons ka color
    headerTitleStyle: {
      color: theme.textPrimary,               // "Settings" text ka color
    },
        }}
      />
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppStack />
        <BottomTabBar />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;