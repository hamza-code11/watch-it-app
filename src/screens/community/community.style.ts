import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
    },

    // Top Header Row
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

    // Profile Avatar (Blue Gradient, No Border)
    profileAvatar: {
      width: 38,
      height: 38,
      borderRadius: 21,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      // Shadow
      shadowColor: '#4F9FFF',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 6,
    },
    profileAvatarText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },

    // Content Scroll
    contentContainer: {
      paddingBottom: 40,
    },
  });