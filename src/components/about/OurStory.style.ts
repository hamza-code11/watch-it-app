import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getOurStoryStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingLg,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      marginBottom: 8,
    },
    subtitle: {
      color: theme.textSecondary,
      fontSize: 14,
      lineHeight: 20,
      marginBottom: 12,
    },
    storyText: {
      color: theme.textMuted,
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 16,
    },

    // Timeline
    timelineContainer: {
      flexDirection: 'column',
      gap: 16,
    },
    timelineItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 12,
    },
    timelineDot: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: theme.accentPrimary,
      marginTop: 4,
    },
    timelineContent: {
      flex: 1,
    },
    timelineYear: {
      color: theme.accentPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },
    timelineText: {
      color: theme.textMuted,
      fontSize: 13,
      lineHeight: 20,
      marginTop: 4,
    },
  });


  