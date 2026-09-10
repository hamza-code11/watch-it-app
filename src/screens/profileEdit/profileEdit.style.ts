import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bgPrimary,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingMd,
    },
    backBtn: {
      padding: 4,
    },
    headerTitle: {
      color: theme.textPrimary,
      fontSize: 15,
      fontWeight: '600',
    },
    contentContainer: {
      paddingBottom: 80,
    },

    // Profile Header
    profileHeader: {
      paddingHorizontal: theme.spacingLg,
      marginBottom: 16,
    },
    profileTitle: {
      color: theme.textPrimary,
      fontSize: 24,
      fontWeight: 'bold',
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
      fontWeight: 'bold',
    },

    // Form Section
    sectionCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      padding: 16,
      marginHorizontal: theme.spacingLg,
      marginBottom: 16,
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
      fontWeight: 'bold',
    },
    inputContainer: {
      marginBottom: 12,
    },
    inputLabel: {
      color: theme.textSecondary,
      fontSize: 13,
      fontWeight: '600',
      marginBottom: 6,
    },
    input: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      color: theme.textPrimary,
      fontSize: 14,
      borderWidth: 1,
      borderColor: theme.borderLight,
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
      fontWeight: '600',
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
      fontWeight: 'bold',
    },
    stepCircleTextInactive: {
      color: theme.textMuted,
      fontSize: 14,
      fontWeight: 'bold',
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
      fontWeight: '600',
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
      fontWeight: 'bold',
    },
  });
  