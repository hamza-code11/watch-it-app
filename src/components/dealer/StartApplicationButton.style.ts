import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStartApplicationStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingSm,
      marginBottom: theme.spacingMd,
    },
    buttonWrapper: {
      borderRadius: theme.radiusLg,
      overflow: 'hidden',
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacingLg,
      paddingVertical: 16,
    },
    buttonText: {
      color: '#000000',
      fontSize: 16,
      fontFamily: theme.bold,
    },
  });
  