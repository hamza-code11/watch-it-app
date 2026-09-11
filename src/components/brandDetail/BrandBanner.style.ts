import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getBrandBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      paddingHorizontal: theme.spacingSm,
      paddingVertical: theme.spacingSm,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      flexDirection: 'column',
      gap: 10,
      marginTop: theme.spacingSm,
    },
    
    // Top Row (Logo + Info)
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    
    logoContainer: {
      width: 80,
      height: 80,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: theme.accentPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.bgInput,
    },
    logo: {
      width: '80%',
      height: '80%',
      resizeMode: 'contain',
    },
    infoContainer: {
      flex: 1,
    },
    brandName: {
      color: theme.textPrimary,
      fontSize: 24,
      fontFamily: theme.bold,
    },
    brandDescription: {
      color: theme.textSecondary,
      fontSize: 12,
      lineHeight: 18,
      fontFamily: theme.regular,
    },

    // Stats Row (Neechy Full Width)
    statsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 2,
      paddingTop: 8,
      borderTopWidth: 1,
      borderTopColor: theme.borderColor,
    },
    statItem: {
      flex: 1,
      alignItems: 'center',
    },
    statNumber: {
      color: theme.accentPrimary,
      fontSize: 18,
      fontFamily: theme.bold,
    },
    statLabel: {
      color: theme.textMuted,
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      marginTop: 2,
      fontFamily: theme.regular,
    },
    statDivider: {
      width: 1,
      height: 30,
      backgroundColor: theme.borderColor,
    },
  });
