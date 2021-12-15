import {StyleSheet} from 'react-native';

export const getStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      color: theme.colors.text,
      backgroundColor: theme.colors.accentPrimary,
      borderRadius: theme.roundness,
      alignItems: 'center',
      width: '100%',
      maxWidth: 600,
      minWidth: 140,
      flex: -1,
    },
  });
