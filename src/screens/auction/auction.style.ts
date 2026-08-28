import { Platform, StyleSheet } from 'react-native';
import { darkTheme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: darkTheme.spacingLg,
    paddingVertical: darkTheme.spacingMd,
    backgroundColor: darkTheme.bgPrimary,
    borderBottomWidth: 1,
    borderBottomColor: darkTheme.borderColor,
  },
  headerTitle: {
    color: darkTheme.textPrimary,
    fontSize: 16,
    fontWeight: '500',
  },
  liveBadge: {
    backgroundColor: darkTheme.danger,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: darkTheme.radiusFull,
  },
  liveBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  heroContainer: {
    paddingHorizontal: darkTheme.spacingLg,
    paddingTop: darkTheme.spacingMd,
    paddingBottom: darkTheme.spacingMd,
  },
  heroTitle: {
    color: darkTheme.textPrimary,
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : darkTheme.fontFamily,
    lineHeight: 38,
  },
  heroSubtitle: {
    color: darkTheme.textMuted,
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
  heroInfoRow: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    color: darkTheme.textMuted,
    fontSize: 12,
    marginLeft: 5,
  },
  
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: darkTheme.spacingLg,
    marginBottom: darkTheme.spacingMd,
    padding: 5,
    backgroundColor: darkTheme.bgCard,
    borderRadius: darkTheme.radiusMd,
    borderWidth: 1,
    borderColor: darkTheme.borderColor,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
  },
  activeTabBarItem: {
    backgroundColor: darkTheme.bgTertiary,
  },
  tabBarLabel: { 
    color: darkTheme.textMuted,
    fontSize: 14,
    fontWeight: '600',
  },
  activeTabBarLabel: {
    color: darkTheme.textPrimary,
  },
  tabBarCount: { 
    color: darkTheme.textMuted,
    fontWeight: 'bold',
  },
  activeTabBarCount: {
    color: darkTheme.accentPrimary,
  },
});