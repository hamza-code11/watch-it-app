import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStepBrandStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingLg,
    },
    card: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    subtitle: {
      color: theme.textMuted,
      fontSize: 13,
      marginBottom: 16,
    },
    // Brands row ka gap aur padding kam ki
    brandRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6, // Gap kam kiya (pehle 8 tha)
      marginBottom: 12, // Margin kam kiya (pehle 16 tha)
    },
    brandChip: {
      paddingHorizontal: 10, // Padding kam kiya (pehle 12 tha)
      paddingVertical: 6, // Padding kam kiya (pehle 8 tha)
      borderRadius: theme.radiusFull,
      borderWidth: 1,
      borderColor: theme.borderLight,
      backgroundColor: theme.bgInput,
    },
    brandChipSelected: {
      backgroundColor: theme.accentPrimary,
      borderColor: theme.accentPrimary,
    },
    brandText: {
      color: theme.textPrimary,
      fontSize: 12, // Font size kam kiya
      fontWeight: '400', // Unbold kiya (pehle '600' tha)
    },
    inputContainer: {
      marginBottom: 12,
    },
    label: {
      color: theme.textSecondary,
      fontSize: 13,
      fontWeight: '600',
      marginBottom: 4,
    },
    textArea: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      color: theme.textPrimary,
      fontSize: 14,
      height: 80, // Height kam ki (pehle 100 thi)
      textAlignVertical: 'top',
      borderWidth: 1,
      borderColor: theme.borderLight,
    },
  });
