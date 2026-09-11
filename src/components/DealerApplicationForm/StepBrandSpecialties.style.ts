import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStepBrandStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingSm,
    },
    card: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 18,
      fontFamily: theme.bold,
      marginBottom: 4,
    },
    subtitle: {
      color: theme.textMuted,
      fontSize: 13,
      marginBottom: 16,
      fontFamily: theme.regular,
    },
    // Brands row ka gap aur padding kam ki
    brandRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 4, // Gap kam kiya (pehle 8 tha)
      marginBottom: 12, // Margin kam kiya (pehle 16 tha)
    },
    brandChip: {
      paddingHorizontal: 10, 
      paddingVertical: 6,
      borderRadius: theme.radiusSm,
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
      fontSize: 11, 
      fontFamily: theme.regular,
    },
    inputContainer: {
      marginBottom: 12,
    },
    label: {
      color: theme.textSecondary,
      fontSize: 13,
      fontFamily: theme.bold,
      marginBottom: 4,
    },
    textArea: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      color: theme.textPrimary,
      fontSize: 12,
      height: 80, // Height kam ki (pehle 100 thi)
      textAlignVertical: 'top',
      borderWidth: 1,
      borderColor: theme.borderLight,
      fontFamily: theme.regular,
    },
  });
