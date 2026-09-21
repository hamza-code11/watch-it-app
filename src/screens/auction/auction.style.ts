import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.bgPrimary, paddingBottom: 40, paddingTop: 70 },
    contentContainer: { paddingBottom: 40 },
  });
