import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStartApplicationStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingLg,
      marginTop: theme.spacingSm,
      marginBottom: theme.spacingLg,
    },
    buttonWrapper: {
      borderRadius: theme.radiusXl,
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
      color: '#000000', // Text ka color black kiya
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  