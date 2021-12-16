import {StyleSheet} from 'react-native';

export const getStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      color: theme.colors.text,
      borderRadius: theme.roundness,
      alignItems: 'center',
      width: '100%',
      flex: -1,
    },
  });
