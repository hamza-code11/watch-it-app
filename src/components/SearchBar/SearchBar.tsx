// components/SearchBar/SearchBar.tsx
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./SearchBar.styles";

type SearchBarProps = {
  onSearch?: (query: string) => void;
  placeholder?: string;
};

const SearchBar = ({
  onSearch,
  placeholder = "Search for brands, watches...",
}: SearchBarProps) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const [query, setQuery] = useState("");

  const handleChange = (text: string) => {
    setQuery(text);
    onSearch?.(text);
  };

  const handleClear = () => {
    setQuery("");
    onSearch?.("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <Ionicons name="search-outline" size={20} color={theme.textMuted} style={styles.searchIcon} />
        
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={handleChange}
          placeholder={placeholder}
          placeholderTextColor={theme.textLight}
          returnKeyType="search"
        />

        {query.length > 0 && (
          <TouchableOpacity onPress={handleClear}>
            <Ionicons
              name="close-circle"
              size={18}
              color={theme.textMuted}
              style={styles.clearIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;

