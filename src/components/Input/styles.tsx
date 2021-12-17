import {StyleSheet} from 'react-native';

export const getStyles = (theme: ITheme) =>
  StyleSheet.create({
    input: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      width: '100%',
      maxWidth: 600,
      borderWidth: 2,
      borderRadius: theme.roundness,
      marginBottom: 18,
      color: theme.colors.text,
    },
  });
