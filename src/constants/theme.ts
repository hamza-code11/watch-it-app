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
  bgPrimary: "#F6F7FB",
  bgSecondary: "#ECEEF6",
  bgTertiary: "#E1E4F2",
  bgCard: "#FFFFFF",
  bgInput: "#FFFFFF",
  bgGradient: ["#F6F7FB", "#EDEFFA", "#E4E7FB"],
  bgGradientLocations: [0, 0.6, 1],

  textPrimary: "#0E0F1C",
  textSecondary: "#2B2C42",
  textMuted: "#6B6D85",
  textLight: "#9C9EB5",

  borderColor: "#E1E3F0",
  borderLight: "#EDEFFA",
  borderFocus: "#4F7FFF",

  accentPrimary: "#4F7FFF",
  accentPrimaryDark: "#3560D9",
  accentPrimaryLight: "#7FA0FF",
  accentSecondary: "#22D3EE",
  accentTertiary: "#8B5CF6",
  accentUltraLight: "#E8EEFF",
  accentGradient: ["#22D3EE", "#4F7FFF"],

  success: "#12B76A",
  successLight: "#D1FADF",
  warning: "#F79009",
  warningLight: "#FEF0C7",
  danger: "#F04438",
  dangerLight: "#FEE4E2",

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
  bgPrimary: "#0a0908",
  bgSecondary: "#0a0a0c",
  bgTertiary: "#141417",
  bgCard: "#101012",
  bgInput: "#08080a",
  bgGradient: ["#151c29", "#000000", "#363a43"],
  bgGradientLocations: [0, 0.6, 5.5],

  textPrimary: "#ffffff",
  textSecondary: "#d4d6db",
  textMuted: "#8b8f99",
  textLight: "#55585f",

  borderColor: "#26272b",
  borderLight: "#1a1b1e",
  borderFocus: "#0091ff",

  accentPrimary: "#00d4ff",
  accentPrimaryDark: "#0066cc",
  accentPrimaryLight: "#40b0ff",
  accentSecondary: "#00d4ff",
  accentTertiary: "#6ee6ff",
  accentUltraLight: "#003c55",
  accentGradient: ["#22D3EE", "#4F7FFF"],

  success: "#00e396",
  successLight: "#0a3327",
  warning: "#ffb800",
  warningLight: "#3d2c05",
  danger: "#ff3b5c",
  dangerLight: "#3d0f18",

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