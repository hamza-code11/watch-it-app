// src/components/SplashScreenView/SplashScreenView.styles.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 40,
    color: "#ffffff",
    letterSpacing: 6,
    fontFamily: "Bold",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 12,
    color: "#4a94c4",
    letterSpacing: 3,
    fontFamily: "Bold",
  },
  divider: {
    width: 40,
    height: 1,
    backgroundColor: "#8bbdd9",
    marginVertical: 20,
  },
  tagline: {
    fontSize: 16,
    color: "#a9c2d9", 
    fontFamily: "Bold",
  },
  footer: {
    position: "absolute",
    bottom: 60,
    alignItems: "center",
    width: "100%",
  },
  kycRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 16,
  },
  kycText: {
    fontSize: 11,
    color: "#8bbdd9",
    fontFamily: "Bold",
  },
  progressTrack: {
    width: 120,
    height: 3,
    borderRadius: 2,
    backgroundColor: "rgba(255,255,255,0.15)",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 2,
  },
});

