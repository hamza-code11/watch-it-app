export type Theme = {
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;
  bgCard: string;
  bgInput: string;
  bgGradient: [string, string, ...string[]];
  bgGradientLocations: [number, number, ...number[]];

  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textLight: string;

  borderColor: string;
  borderLight: string;
  borderFocus: string;

  accentPrimary: string;
  accentPrimaryDark: string;
  accentPrimaryLight: string;
  accentSecondary: string;
  accentTertiary: string;
  accentUltraLight: string;
  accentGradient: [string, string, ...string[]];

  success: string;
  successLight: string;
  warning: string;
  warningLight: string;
  danger: string;
  dangerLight: string;

  spacingXs: number;
  spacingSm: number;
  spacingMd: number;
  spacingLg: number;
  spacingXl: number;

  radiusSm: number;
  radiusMd: number;
  radiusLg: number;
  radiusXl: number;
  radiusFull: number;

  bold: string;
  regular: string;
  light: string;
};

export const lightTheme: Theme = {
  bgPrimary: "#f8faff",
  bgSecondary: "#f0f5ff",
  bgTertiary: "#e8eef6",
  bgCard: "#ffffff",
  bgInput: "#ffffff",
  bgGradient: ["#f8faff", "#EDEFFA", "#E4E7FB"],
  bgGradientLocations: [0, 0.6, 1],

  textPrimary: "#0a1628",
  textSecondary: "#1a365d",
  textMuted: "#5a7a9a",
  textLight: "#8aaac0",

  borderColor: "#dce4ed",
  borderLight: "#eef3fa",
  borderFocus: "#0f4c81",

  accentPrimary: "#0f4c81",
  accentPrimaryDark: "#0a3358",
  accentPrimaryLight: "#1e6fa8",
  accentSecondary: "#4a94c4",
  accentTertiary: "#8bbdd9",
  accentUltraLight: "#c9e0ee",
  accentGradient: ["#4a94c4", "#0f4c81"],

  success: "#059669",
  successLight: "#d1fae5",
  warning: "#d97706",
  warningLight: "#fef3c7",
  danger: "#dc2626",
  dangerLight: "#fee2e2",

  spacingXs: 4,
  spacingSm: 8,
  spacingMd: 16,
  spacingLg: 24,
  spacingXl: 32,

  radiusSm: 6,
  radiusMd: 8,
  radiusLg: 12,
  radiusXl: 16,
  radiusFull: 9999,

  bold: "Bold",
  regular: "Regular",
  light: "Light",
};

export const darkTheme: Theme = {
  bgPrimary: "#000000",
  bgSecondary: "#000000",
  bgTertiary: "#0f1f3a",
  bgCard: "#0a1628",
  bgInput: "#050a18",
  bgGradient: ["#151c29", "#000000", "#363a43"],
  bgGradientLocations: [0, 0.6, 5.5],

  textPrimary: "#f5f0e8",
  textSecondary: "#d0dbe8",
  textMuted: "#c1cad3",
  textLight: "#4a6a8a",

  borderColor: "#1a2d4a",
  borderLight: "#0f1f3a",
  borderFocus: "#4a94c4",

  accentPrimary: "#1e6fa8",
  accentPrimaryDark: "#0f4c81",
  accentPrimaryLight: "#4a94c4",
  accentSecondary: "#8bbdd9",
  accentTertiary: "#c9e0ee",
  accentUltraLight: "#dcedf7",
  accentGradient: ["#0a1628", "#0f4c81"],

  success: "#34d399",
  successLight: "#064e3b",
  warning: "#fbbf24",
  warningLight: "#78350f",
  danger: "#f87171",
  dangerLight: "#7f1d1d",

  spacingXs: 4,
  spacingSm: 8,
  spacingMd: 16,
  spacingLg: 24,
  spacingXl: 32,

  radiusSm: 6,
  radiusMd: 8,
  radiusLg: 12,
  radiusXl: 16,
  radiusFull: 9999,

  bold: "Bold",
  regular: "Regular",
  light: "Light",
};