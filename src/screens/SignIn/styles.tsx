import {StyleSheet} from 'react-native';

export const getStyles = (_theme: ITheme) =>
  StyleSheet.create({
    avatar: {
      width: '100%',
      height: '100%',
      maxWidth: 200,
      maxHeight: 200,
      borderRadius: 100,
      marginBottom: 34,
    },
  });
