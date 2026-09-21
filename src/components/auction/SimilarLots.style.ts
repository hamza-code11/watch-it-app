import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

const GOLD = '#8bbdd9';

export const getSimilarLotsStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { marginTop: theme.spacingLg, paddingBottom: theme.spacingLg },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: theme.spacingMd,
      marginBottom: theme.spacingSm,
    },
    title: { color: theme.textPrimary, fontSize: 16, fontFamily: theme.bold },

    row: { paddingHorizontal: theme.spacingMd, gap: 12 },
    card: {
      width: 180,
      backgroundColor: theme.bgCard,
      borderRadius: 14,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    imageWrap: { position: 'relative' },
    image: { width: '100%', height: 130, backgroundColor: theme.bgSecondary },
    badge: {
      position: 'absolute',
      top: 8, left: 8,
      paddingHorizontal: 8, paddingVertical: 3,
      borderRadius: 6,
    },
    badgeText: { color: '#fff', fontSize: 9, fontFamily: theme.bold, letterSpacing: 0.5 },

    body: { padding: 10 },
    brand: { color: GOLD, fontSize: 9, letterSpacing: 1, fontFamily: theme.bold },
    name: { color: theme.textPrimary, fontSize: 13, fontFamily: theme.bold, marginTop: 4 },
    ref: { color: theme.textMuted, fontSize: 10, fontFamily: theme.regular, marginTop: 2 },
    price: { color: theme.textPrimary, fontSize: 13, fontFamily: theme.bold, marginTop: 8 },
  });
