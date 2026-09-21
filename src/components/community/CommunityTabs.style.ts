// CommunityTabs.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

const GOLD = '#1e6fa8';

export const getCommunityTabsStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingSm,
      marginBottom: theme.spacingSm,
      marginTop: theme.spacingMd,
    },
    tabsRow: {
      flexDirection: 'row',
      gap: 4,
    },
    tabButton: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: theme.radiusFull,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.15)',
      backgroundColor: 'rgba(255,255,255,0.03)',
    },
    tabActive: {
      backgroundColor: GOLD,
      borderColor: GOLD,
    },
    tabText: {
      color: 'rgba(255,255,255,0.75)',
      fontSize: 12,
      fontFamily: theme.bold,
    },
    tabTextActive: {
      color: 'white',
      fontFamily: theme.bold,
    },
  });
