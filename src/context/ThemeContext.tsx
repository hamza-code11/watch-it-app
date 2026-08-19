// context/ThemeContext.tsx
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { darkTheme, lightTheme, Theme } from "../constants/theme";

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [override, setOverride] = useState<"light" | "dark">("dark"); // 👈 default dark

  const isDark = override === "dark";
  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  const toggleTheme = () => setOverride(isDark ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};

