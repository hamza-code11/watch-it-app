import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getVendorBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingSm,
      backgroundColor: theme.bgCard, 
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      flexDirection: 'column',
      gap: 20,
      marginTop: theme.spacingXs,
    },

    // Top Row (Logo + Info)
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },

    // Logo Container
    logoContainer: {
      width: 80,
      height: 80,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: theme.accentPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.bgInput,
      overflow: 'hidden',
    },
    logo: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    infoContainer: {
      flex: 1,
    },
    vendorName: {
      color: theme.textPrimary,
      fontSize: 22,
      fontFamily: theme.bold,
    },
    vendorAddress: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
      fontFamily: theme.regular,
    },
    vendorDescription: {
      color: theme.textSecondary,
      fontSize: 12,
      lineHeight: 18,
      marginTop: 4,
      fontFamily: theme.regular,
    },

    // Badge
    verifiedBadge: {
      width: 14,
      height: 14,
      borderRadius: 9,
      backgroundColor: '#3B82F6',
      alignItems: 'center',
      justifyContent: 'center',
    },

    // Stats Row (3 Columns)
    statsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
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