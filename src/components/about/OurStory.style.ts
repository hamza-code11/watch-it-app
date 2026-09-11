import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getOurStoryStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingLg,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 24,
      fontFamily: theme.bold,
      marginBottom: 8,
    },
    subtitle: {
      color: theme.textSecondary,
      fontSize: 14,
      lineHeight: 20,
      marginBottom: 12,
      fontFamily: theme.bold,
    },
    storyText: {
      color: theme.textMuted,
      fontSize: 12,
      lineHeight: 22,
      marginBottom: 16,
      fontFamily: theme.regular,
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
      fontFamily: theme.bold,
    },
    timelineText: {
      color: theme.textMuted,
      fontSize: 13,
      lineHeight: 20,
      marginTop: 4,
      fontFamily: theme.regular,
    },
  });


  