import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingMd,
      backgroundColor: theme.bgPrimary,
    },
    backBtn: {
      padding: 4,
    },
    headerTitle: {
      color: theme.textPrimary,
      fontSize: 15,
      fontFamily: theme.bold,
    },
    contentContainer: {
      paddingBottom: 80,
    },

    // Profile Header
    profileHeader: {
      paddingHorizontal: theme.spacingLg,
      marginBottom: theme.spacingMd,
    },
    profileTitle: {
      color: theme.textPrimary,
      fontSize: 24,
      fontFamily: theme.bold,
      marginBottom: 4,
    },
    editBtn: {
      backgroundColor: theme.accentPrimary,
      borderRadius: theme.radiusFull,
      paddingHorizontal: 16,
      paddingVertical: 8,
      alignSelf: 'flex-start',
    },
    editBtnText: {
      color: '#FFFFFF',
      fontSize: 13,
      fontFamily: theme.bold,
    },

    // Form Section
    sectionCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      padding: 16,
      marginHorizontal: theme.spacingSm,
      marginBottom: theme.spacingSm,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    sectionTitle: {
      color: theme.textPrimary,
      fontSize: 18,
      fontFamily: theme.bold,
    },
    inputContainer: {
      marginBottom: 12,
    },
    inputLabel: {
      color: theme.textSecondary,
      fontSize: 13,
      fontFamily: theme.bold,
      marginBottom: 6,
    },
    input: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      color: theme.textPrimary,
      fontSize: 12,
      borderWidth: 1,
      borderColor: theme.borderLight,
      fontFamily: theme.regular,
    },
    inputDisabled: {
      backgroundColor: theme.bgTertiary,
      opacity: 0.8,
    },
    inputRow: {
      flexDirection: 'row',
      gap: 8,
    },
    verifyBtn: {
      alignSelf: 'flex-start',
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.accentPrimary,
      backgroundColor: 'rgba(79, 159, 255, 0.1)',
      marginTop: 6,
    },
    verifyBtnText: {
      color: theme.accentPrimary,
      fontSize: 12,
      fontFamily: theme.bold,
    },

    // Password Section
    passwordStepsRow: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    stepCircle: {
      width: 32,
      height: 32,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8,
    },
    stepCircleActive: {
      backgroundColor: theme.accentPrimary,
    },
    stepCircleInactive: {
      backgroundColor: theme.bgTertiary,
    },
    stepCircleText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontFamily: theme.bold,
    },
    stepCircleTextInactive: {
      color: theme.textMuted,
      fontSize: 14,
      fontFamily: theme.bold,
    },

    // Buttons
    buttonsRow: {
      flexDirection: 'row',
      gap: 10,
      marginHorizontal: theme.spacingLg,
      marginBottom: 16,
    },
    cancelBtn: {
      flex: 1,
      paddingVertical: 12,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      backgroundColor: theme.bgCard,
      alignItems: 'center',
    },
    cancelBtnText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontFamily: theme.bold,
    },
    saveBtn: {
      flex: 1,
      paddingVertical: 12,
      borderRadius: theme.radiusMd,
      backgroundColor: theme.accentPrimary,
      alignItems: 'center',
    },
    saveBtnText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontFamily: theme.bold,
    },
  });
  