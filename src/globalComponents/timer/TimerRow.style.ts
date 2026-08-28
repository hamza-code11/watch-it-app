// TimerRow.style.ts
import { Platform, StyleSheet } from 'react-native';
import { darkTheme } from '../../constants/theme';

export const timerStyles = StyleSheet.create({
  timerRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: darkTheme.spacingXs,
  },
  timerBox: {
    backgroundColor: darkTheme.bgCard,
    borderRadius: darkTheme.radiusMd,
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerNum: {
    color: darkTheme.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : darkTheme.fontFamily,
  },
  timerLabel: {
    color: darkTheme.textMuted,
    fontSize: 10,
    marginTop: 2,
  },
  timerColon: {
    color: darkTheme.textMuted,
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: darkTheme.spacingXs,
  },
});

