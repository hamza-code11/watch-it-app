import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
      marginBottom: 60,
    },
    // Top Header Row
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingMd,
    },
    backBtn: {
      padding: 4,
    },
    headerTitle: {
      color: theme.textPrimary,
      fontSize: 15,
      fontFamily: theme.bold,
    },

    // Banner (Blue Gradient)
    banner: {
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingLg,
    },
    bannerTitle: {
      color: '#FFFFFF',
      fontSize: 28,
      fontFamily: theme.bold,
      marginBottom: 8,
    },
    bannerSubtitle: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 12,
      lineHeight: 22,
      fontFamily: theme.regular,
    },

    // Search Bar
    searchContainer: {
      paddingHorizontal: theme.spacingSm,
      marginBottom: theme.spacingMd,
      marginTop: theme.spacingMd,
    },
    searchRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    searchBox: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusFull,
      paddingHorizontal: 14,
      paddingVertical: 2,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    searchInput: {
      flex: 1,
      color: theme.textPrimary,
      fontSize: 14,
      fontFamily: theme.regular,
    },

    // Count
    countText: {
      color: theme.textMuted,
      fontSize: 12,
      paddingHorizontal: theme.spacingMd,
      marginBottom: theme.spacingSm,
      fontFamily: theme.bold,
    },

    // Vendor List
    vendorsList: {
      paddingHorizontal: theme.spacingSm,
      marginBottom: theme.spacingSm,
    },
    vendorCard: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingVertical: theme.spacingSm,
      paddingHorizontal: theme.spacingSm,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      marginBottom: theme.spacingSm,
    },
    vendorLogo: {
      width: 70,
      height: 70,
      borderRadius: 35,
      resizeMode: 'cover',
      margin: 6,
    },
    vendorInfo: {
      flex: 1,
    },
    vendorNameRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    vendorName: {
      color: theme.textPrimary,
      fontSize: 16,
      fontFamily: theme.bold,
    },
    verifiedBadge: {
      width: 16,
      height: 16,
      borderRadius: 9,
      backgroundColor: '#3B82F6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    vendorRating: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      marginTop: 4,
    },
    vendorRatingText: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
    },
    vendorMeta: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginTop: 4,
    },
    vendorProducts: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
    },
    vendorLocation: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
    },
    vendorCountry: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 4,
      fontFamily: theme.regular,
    },
  });
