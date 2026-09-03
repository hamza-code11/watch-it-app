import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    overlayPress: {
      flex: 1,
    },
    sidebar: {
      height: '100%',
      backgroundColor: theme.bgPrimary,
      paddingTop: 50,
    },
    header: {
      paddingHorizontal: 20,
      paddingBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: theme.accentUltraLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcomeText: {
      color: theme.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },
    subtitleText: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
    },
    menuContainer: {
      flex: 1,
      paddingHorizontal: 16,
    },
    section: {
      marginTop: 16,
    },
    sectionTitle: {
      color: theme.textMuted,
      fontSize: 13,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      marginBottom: 8,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    sectionContent: {
      marginBottom: 8,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      paddingVertical: 12,
    },
    menuItemLast: {
      borderBottomWidth: 0,
    },
    menuText: {
      color: theme.textSecondary,
      fontSize: 15,
      fontWeight: '500',
    },
  });
  2