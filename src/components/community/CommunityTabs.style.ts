// CommunityTabs.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getCommunityTabsStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingXs,
      marginBottom: theme.spacingSm,
      marginTop: theme.spacingMd,
    },
    tabsRow: {
      flexDirection: 'row',
      gap: 0,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusMd,
      paddingVertical: 4,
      paddingHorizontal: 4,
    },
    tabButton: {
      paddingHorizontal: 8,
      paddingVertical: 8,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: 'transparent',
    },
    tabActive: {
      backgroundColor: theme.bgSecondary,
      borderColor: theme.accentPrimary,
    },
    tabText: {
      color: theme.textSecondary,
      fontSize: 12,
      fontWeight: '600',
    },
    tabTextActive: {
      color: theme.accentPrimary,
      fontWeight: 'bold',
    },
  });