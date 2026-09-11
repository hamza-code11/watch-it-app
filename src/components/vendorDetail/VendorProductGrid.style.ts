import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getVendorProductGridStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingSm,
      marginTop: theme.spacingSm,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  });

  