// BidHistory.style.ts
import { StyleSheet } from 'react-native';
import { darkTheme } from '../../../constants/theme';

export const bidHistoryStyles = StyleSheet.create({
  sectionHeader: {
    color: darkTheme.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: darkTheme.fontFamily,
    marginTop: darkTheme.spacingLg,
    marginBottom: 10,
  },
  card: {
    backgroundColor: darkTheme.bgCard,
    borderRadius: darkTheme.radiusXl,
    padding: darkTheme.spacingMd,
    marginTop: darkTheme.spacingMd,
    borderWidth: 1,
    borderColor: darkTheme.borderColor,
  },
  bidHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    color: darkTheme.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: darkTheme.fontFamily,
  },
  countBadge: {
    backgroundColor: darkTheme.bgTertiary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: darkTheme.radiusFull,
  },
  countBadgeText: {
    color: darkTheme.textMuted,
    fontSize: 12,
  },
  bidItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: darkTheme.spacingSm,
    borderBottomWidth: 1,
    borderBottomColor: darkTheme.borderColor,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: darkTheme.radiusFull,
    backgroundColor: darkTheme.bgTertiary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: darkTheme.spacingSm,
  },
  avatarText: {
    color: darkTheme.textPrimary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  bidInfo: {
    flex: 1,
  },
  bidName: {
    color: darkTheme.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  bidTime: {
    color: darkTheme.textMuted,
    fontSize: 12,
    marginTop: darkTheme.spacingXs,
  },
  bidAmount: {
    color: darkTheme.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
});
