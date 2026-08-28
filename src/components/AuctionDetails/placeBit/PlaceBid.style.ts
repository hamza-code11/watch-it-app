import { StyleSheet } from 'react-native';
import { darkTheme } from '../../../constants/theme';

export const placeBidStyles = StyleSheet.create({
  card: {
    backgroundColor: darkTheme.bgCard,
    borderRadius: darkTheme.radiusXl,
    padding: darkTheme.spacingMd,
    marginTop: darkTheme.spacingMd,
    borderWidth: 1,
    borderColor: darkTheme.borderColor,
  },
  inputHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: darkTheme.spacingMd,
  },
  labelSmall: {
    color: darkTheme.textMuted,
    fontSize: 12,
    marginBottom: darkTheme.spacingXs,
  },
  currentPrice: {
    color: darkTheme.accentPrimary,
    fontSize: 22,
    fontWeight: 'bold',
  },
  quickAmounts: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: darkTheme.spacingMd,
  },
  amountBtn: {
    backgroundColor: darkTheme.bgInput,
    paddingVertical: 10,
    flex: 1,
    borderRadius: darkTheme.radiusMd,
    alignItems: 'center',
  },
  amountBtnText: {
    color: darkTheme.textPrimary,
    fontWeight: '600',
  },
  input: {
    backgroundColor: darkTheme.bgInput,
    borderRadius: darkTheme.radiusMd,
    padding: darkTheme.spacingMd,
    color: darkTheme.textPrimary,
    fontSize: 16,
    marginBottom: 10,
  },
  inputWarningRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWarningText: {
    color: darkTheme.warning,
    fontSize: 12,
    marginLeft: darkTheme.spacingXs,
    flex: 1,
  },

  // NAYA BUTTON STYLE
  placeBidSubmitBtn: {
    backgroundColor: darkTheme.accentPrimary,
    borderRadius: darkTheme.radiusXl,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: darkTheme.spacingMd,
  },
  placeBidSubmitText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
