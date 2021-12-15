import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width - 32;

export const getStyles = (_theme: ITheme) =>
  StyleSheet.create({
    avatar: {
      width: windowWidth,
      height: windowWidth,
      maxWidth: 600,
      maxHeight: 600,
      borderRadius: 100,
      marginBottom: 34,
    },
  });
