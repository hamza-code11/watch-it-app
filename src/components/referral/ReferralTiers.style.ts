import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getReferralTiersStyles = (theme: Theme) =>
  StyleSheet.create({
    // Main Card (Box)
    mainCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingMd,
      marginHorizontal: theme.spacingLg,
      marginBottom: theme.spacingLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    sectionTitle: {
      color: theme.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    tierItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor,
    },
    tierItemLast: {
      borderBottomWidth: 0,
    },
    tierIcon: {
      width: 32,
      height: 32,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tierInfo: {
      flex: 1,
    },
    tierName: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: 'bold',
    },
    tierRange: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
    },
    tierBadge: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: theme.radiusFull,
      flexDirection: 'row',
      alignItems: 'center',
    },
    tierBadgeText: {
      color: '#FFFFFF',
      fontSize: 11,
      fontWeight: '700',
    },
  });
  