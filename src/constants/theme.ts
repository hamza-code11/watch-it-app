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

  fontFamily: string;
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

  fontFamily: "Montserrat_700Bold",
};

export const darkTheme: Theme = {
  bgPrimary: "#05060D",
  bgSecondary: "#0A0C18",
  bgTertiary: "#12142A",
  bgCard: "#12141F",
  bgInput: "#0D0F1A",
  bgGradient: ["#151c29", "#000000", "#363a43"],
  bgGradientLocations: [0, 0.6, 5.5],

  textPrimary: "#F5F5FA",
  textSecondary: "#C7C9DE",
  textMuted: "#8C8FAD",
  textLight: "#5C5F7D",

  borderColor: "#1E2038",
  borderLight: "#181A2E",
  borderFocus: "#4F9FFF",

  accentPrimary: "#4F9FFF",
  accentPrimaryDark: "#3560D9",
  accentPrimaryLight: "#7FC4FF",
  accentSecondary: "#22D3EE",
  accentTertiary: "#8B5CF6",
  accentUltraLight: "#1A1E3A",
  accentGradient: ["#22D3EE", "#4F7FFF"],

  success: "#32D583",
  successLight: "#0B3B2A",
  warning: "#FDB022",
  warningLight: "#4A2E06",
  danger: "#F97066",
  dangerLight: "#4A1512",

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

  fontFamily: "Montserrat_700Bold",
};