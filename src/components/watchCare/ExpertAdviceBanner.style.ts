import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getExpertAdviceBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    bannerWrapper: {
      paddingHorizontal: theme.spacingSm,
      marginBottom: theme.spacingSm,
      marginTop: theme.spacingSm,
    },

    banner: {
      height: 160,
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      position: 'relative',
      justifyContent: 'flex-start',
    },

    bannerImage: {
      width: '100%',
      height: '100%',
    },

    // Dark overlay mostly on left side
    bannerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    // Left content
    bannerContent: {
      width: '63%',
      paddingLeft: 17,
      paddingTop: 17,
    },

    bannerLabel: {
      color: theme.accentSecondary,
      fontSize: 8,
      fontFamily: theme.bold,
      letterSpacing: 1.1,
      marginBottom: 5,
    },

    bannerTitle: {
      color: '#FFFFFF',
      fontSize: 22,
      lineHeight: 26,
      fontFamily: theme.bold,
      marginBottom: 4,
    },

    bannerSubtitle: {
      color: 'rgba(255,255,255,0.82)',
      fontSize: 11,
      lineHeight: 13,
      fontFamily: theme.regular,
      width: '100%',
      marginBottom: 12,
    },

    // CTA
    bannerBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      backgroundColor: theme.accentPrimary,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 7,
      gap: 7,
    },

    bannerBtnText: {
      color: 'white',
      fontSize: 11,
      fontFamily: theme.bold,
    },
  });
