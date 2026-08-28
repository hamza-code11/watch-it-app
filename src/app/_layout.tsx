// app/_layout.tsx
import { Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import BottomTabBar from "../components/BottomTabBar/BottomTabBar";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import SplashScreenView from "../components/SplashScreenView/SplashScreenView";
import { ThemeProvider, useTheme } from "../context/ThemeContext";




SplashScreen.preventAutoHideAsync();

const AppStack = () => {
  const { theme } = useTheme();

  return (
    <LinearGradient
      colors={theme.bgGradient}
      locations={theme.bgGradientLocations}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.7, y: 1 }}
      style={styles.gradient}
    >
      <Stack
        screenOptions={{
          animation: "slide_from_right",
          contentStyle: {
            backgroundColor: "transparent",
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="about" />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="swipe" options={{ headerShown: false }} />
        <Stack.Screen name="auction" options={{ headerShown: false }} />
        <Stack.Screen name="auctionDetail" options={{ headerShown: false }} />
        <Stack.Screen name="flashSaleDetail" options={{ headerShown: false }} />
        <Stack.Screen name="createListing" options={{ headerShown: false }} />
        <Stack.Screen name="myListings" options={{ headerShown: false }} />
        <Stack.Screen name="pages/listingDetails/[id]" options={{ headerShown: false }} />  
        <Stack.Screen
          name="settings"
          options={{
            title: "Settings",
            headerStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
            headerTintColor: theme.textPrimary,
            headerTitleStyle: { color: theme.textPrimary },
          }}
        />
      </Stack>
    </LinearGradient>
  );
};

const RootLayout = () => {
  const [showCustomSplash, setShowCustomSplash] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  const onSplashLayout = useCallback(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <View style={styles.root}>
          <StatusBar style="light" />

          {/* App Screens - Full screen with gradient */}
          <View style={styles.content}>
            <AppStack />
          </View>

          {/* Fixed Header */}
          {!showCustomSplash && (
            <View style={styles.header}>
              <Header
                onProfilePress={() => setSidebarVisible(true)}
                onNotificationPress={() => console.log("Notification")}
              />
            </View>
          )}

          {/* Fixed Bottom Tab */}
          {!showCustomSplash && <BottomTabBar />}

          {/* Sidebar - Global */}
          <Sidebar
            visible={sidebarVisible}
            onClose={() => setSidebarVisible(false)}
          />

          {/* Custom Splash */}
          {showCustomSplash && (
            <SplashScreenView
              style={StyleSheet.absoluteFill}
              onLayout={onSplashLayout}
              onFinish={() => setShowCustomSplash(false)}
            />
          )}
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000', // Fallback color
  },
  content: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
});

export default RootLayout;