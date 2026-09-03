import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getFilterSortBarStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingMd,
    },
    filterBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: theme.radiusFull,
      borderWidth: 1,
      borderColor: theme.accentPrimary,
      backgroundColor: theme.bgInput,
    },
    filterBtnText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: '600',
    },
    sortBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: theme.radiusFull,
      borderWidth: 1,
      borderColor: theme.borderColor,
      backgroundColor: theme.bgCard,
    },
    sortText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: '600',
    },
    sortLabel: {
      color: theme.textMuted,
      fontSize: 14,
    },
  });
  