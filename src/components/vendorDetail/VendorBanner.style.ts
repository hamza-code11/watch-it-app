import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getVendorBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingSm,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      borderWidth: 1,
      borderColor: theme.borderColor,
      flexDirection: 'column', // Column layout
      gap: 20,
    },

    // Top Row (Logo + Info)
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },

    // Logo Container (Image se cover karega)
    logoContainer: {
      width: 80,
      height: 80,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: theme.accentPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.bgInput,
      overflow: 'hidden', // Image container se bahar na nikle
    },
    logo: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover', // Image ko cover karega
    },
    infoContainer: {
      flex: 1,
    },
    vendorName: {
      color: theme.textPrimary,
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
    },
    vendorAddress: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
    },
    vendorDescription: {
      color: theme.textSecondary,
      fontSize: 12,
      lineHeight: 18,
      marginTop: 4,
    },

    // Badge
    verifiedBadge: {
      width: 18,
      height: 18,
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
      fontSize: 22,
      fontWeight: 'bold',
    },
    statLabel: {
      color: theme.textMuted,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      marginTop: 2,
    },
    statDivider: {
      width: 1,
      height: 30,
      backgroundColor: theme.borderColor,
    },
  });