import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getProductGridStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingMd,
    },
    countText: {
      color: theme.textMuted,
      fontSize: 14,
      marginBottom: theme.spacingSm,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  });