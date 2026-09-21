import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Modal, Pressable, Text, TouchableOpacity, View,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { auctionCategories } from '../../data/auctions';
import { getAuctionHeaderStyles } from './AuctionHeader.style';

interface Props {
  category: string;
  onCategoryChange: (c: string) => void;
  onBack?: () => void;
}

export default function AuctionHeader({ category, onCategoryChange, onBack }: Props) {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getAuctionHeaderStyles(theme);
  const [open, setOpen] = useState(false);

  const currentLabel =
    auctionCategories.find((c) => c.key === category)?.label ?? 'Live';

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconBtn}
        onPress={() => (onBack ? onBack() : router.back())}
      >
        <Ionicons name="arrow-back" size={22} color={theme.textPrimary} />
      </TouchableOpacity>

      <Text style={styles.title}>Auction</Text>

      <TouchableOpacity style={styles.filterBtn} onPress={() => setOpen(true)}>
        <Ionicons name="options-outline" size={16} color={theme.textPrimary} />
        <Text style={styles.filterText}>{currentLabel}</Text>
        <Ionicons name="chevron-down" size={14} color={theme.textPrimary} />
      </TouchableOpacity>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
          <View style={styles.dropdown}>
            {auctionCategories.map((c) => (
              <TouchableOpacity
                key={c.key}
                style={styles.dropdownItem}
                onPress={() => {
                  onCategoryChange(c.key);
                  setOpen(false);
                }}
              >
                <Text
                  style={[
                    styles.dropdownText,
                    category === c.key && styles.dropdownTextActive,
                  ]}
                >
                  {c.label}
                </Text>
                {category === c.key && (
                  <Ionicons name="checkmark" size={16} color="#D4AF37" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
