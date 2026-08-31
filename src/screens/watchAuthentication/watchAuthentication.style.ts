import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
      marginBottom: 60,
    },

    // Header
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

    // Content Scroll
    contentContainer: {
      paddingBottom: 40,
    },

    // Plan Cards Container (Style yahan define kar rahe hain)
    plansContainer: {
      paddingLeft: theme.spacingLg,
      paddingRight: theme.spacingSm,
      paddingTop: theme.spacingMd,
    },
  });

