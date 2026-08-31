// MyReferralsList.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getMyReferralsListStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingLg,
      marginBottom: theme.spacingLg,
    },
    referralListSection: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    referralHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    referralTitle: {
      color: theme.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },
    referralCount: {
      color: theme.textMuted,
      fontSize: 12,
    },
    referralItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor,
      paddingBottom: 8,
    },
    referralItemLast: {
      borderBottomWidth: 0,
    },
    referralAvatar: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: theme.accentUltraLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    referralAvatarText: {
      color: theme.accentPrimary,
      fontSize: 14,
      fontWeight: '700',
    },
    referralInfo: {
      flex: 1,
    },
    referralName: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: 'bold',
    },
    referralEmail: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
    },
    referralDate: {
      color: theme.textMuted,
      fontSize: 12,
    },
    showMoreBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      paddingVertical: 12,
      marginTop: 4,
      borderRadius: theme.radiusMd,
      backgroundColor: theme.bgTertiary,
    },
    showMoreText: {
      color: theme.textPrimary,
      fontSize: 13,
      fontWeight: '600',
    },
  });
  