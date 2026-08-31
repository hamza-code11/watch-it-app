import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getReferralCodeStyles = (theme: Theme) =>
  StyleSheet.create({
    // Single Box (Card) for Code + Tier
    mainCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingLg,
      marginHorizontal: theme.spacingLg,
      marginBottom: theme.spacingLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    codeLabel: {
      color: theme.textMuted,
      fontSize: 12,
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: 12,
    },
    codeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacingLg,
    },
    codeText: {
      color: theme.textPrimary,
      fontSize: 24,
      fontWeight: 'bold',
      letterSpacing: 2,
    },
    copyBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: theme.radiusMd,
      backgroundColor: theme.accentUltraLight,
    },
    copyBtnText: {
      color: theme.accentPrimary,
      fontSize: 13,
      fontWeight: 'bold',
    },
    buttonsRow: {
      flexDirection: 'row',
      gap: 10,
      marginBottom: theme.spacingLg,
    },
    linkBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.accentPrimary,
      flex: 1,
      justifyContent: 'center',
    },
    linkBtnText: {
      color: theme.accentPrimary,
      fontSize: 14,
      fontWeight: 'bold',
    },
    shareBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.accentPrimary,
      flex: 1,
      justifyContent: 'center',
    },
    shareBtnText: {
      color: theme.accentPrimary,
      fontSize: 14,
      fontWeight: 'bold',
    },

    // Tier Section (Now inside the card)
    tierRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      borderTopWidth: 1,
      borderTopColor: theme.borderColor,
      paddingTop: theme.spacingMd,
    },
    tierInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    tierIcon: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: theme.accentUltraLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tierText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: '600',
    },
    tierProgressText: {
      color: theme.textMuted,
      fontSize: 12,
    },
    progressBar: {
      width: '100%',
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.bgTertiary,
    },
    progressFill: {
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.accentPrimary,
    },
  });

  