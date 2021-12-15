import {StyleSheet} from 'react-native';

export const getStyles = (_theme: ITheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    detailsText: {
      marginBottom: 12,
      fontSize: 18,
    },
  });
