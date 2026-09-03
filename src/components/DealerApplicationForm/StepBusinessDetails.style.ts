import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStepBusinessDetailsStyles = (theme: Theme) =>
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
    inputContainer: {
      marginBottom: 14,
    },
    label: {
      color: theme.textSecondary,
      fontSize: 13,
      fontWeight: '600',
      marginBottom: 4,
    },
    input: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      color: theme.textPrimary,
      fontSize: 14,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },
    selectInput: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: theme.borderLight,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    // Inventory Size - Radio Button Cards
    inventoryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 8,
    },
    inventoryOption: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderLight,
      backgroundColor: theme.bgInput,
      gap: 4,
    },
    inventorySelected: {
      backgroundColor: theme.accentUltraLight,
      borderColor: theme.accentPrimary,
    },
    inventoryRadio: {
      width: 14,
      height: 14,
      borderRadius: 7,
      borderWidth: 1,
      borderColor: theme.textMuted,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inventoryRadioSelected: {
      borderColor: theme.accentPrimary,
      backgroundColor: theme.accentPrimary,
    },
    inventoryText: {
      color: theme.textPrimary,
      fontSize: 10,
      fontWeight: '600',
    },
  });
