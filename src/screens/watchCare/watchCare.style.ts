import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
      marginBottom: 60,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingMd,
    },
    backBtn: {
      padding: 4,
    },
    headerTitle: {
      color: theme.textPrimary,
      fontSize: 15,
      fontWeight: '600',
    },
    contentContainer: {
      paddingBottom: 40,
    },
    servicesContainer: {
      paddingLeft: theme.spacingLg,
      paddingRight: theme.spacingSm,
      marginTop: theme.spacingLg,
    },
  });

