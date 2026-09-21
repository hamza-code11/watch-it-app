import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

const GOLD = '#8bbdd9';

export const getDetailsModalStyles = (theme: Theme) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'flex-end',
    },
    sheet: {
      backgroundColor: theme.bgCard,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      paddingHorizontal: theme.spacingMd,
      paddingTop: 8,
      paddingBottom: 24,
    },
    handle: {
      alignSelf: 'center',
      width: 44, height: 4,
      borderRadius: 2,
      backgroundColor: theme.borderColor,
      marginBottom: 12,
    },

    tabsRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: theme.borderColor,
      marginBottom: 8,
    },
    tab: {
      flex: 1,
      paddingVertical: 12,
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: 'transparent',
    },
    tabActive: { borderColor: GOLD },
    tabText: { color: theme.textMuted, fontSize: 14, fontFamily: theme.bold },
    tabTextActive: { color: GOLD },

    detailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderColor: theme.borderLight,
    },
    detailKey: { color: theme.textMuted, fontSize: 13, fontFamily: theme.regular },
    detailVal: { color: theme.textPrimary, fontSize: 13, fontFamily: theme.bold },

    bidRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderColor: theme.borderLight,
    },
    bidAvatar: {
      width: 40, height: 40, borderRadius: 20,
      backgroundColor: theme.bgSecondary,
      alignItems: 'center', justifyContent: 'center',
    },
    bidAvatarText: { color: theme.textPrimary, fontSize: 13, fontFamily: theme.bold },
    bidName: { color: theme.textPrimary, fontSize: 14, fontFamily: theme.bold },
    bidTime: { color: theme.textMuted, fontSize: 11, fontFamily: theme.regular, marginTop: 2 },
    bidAmount: { color: GOLD, fontSize: 14, fontFamily: theme.bold },

    emptyText: {
      color: theme.textMuted, fontSize: 13,
      fontFamily: theme.regular,
      textAlign: 'center',
      paddingVertical: 24,
    },
  });
  