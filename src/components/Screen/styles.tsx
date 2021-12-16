import {StyleSheet} from 'react-native';

export const getStyles = (_theme: ITheme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    childrenContainer: {
      flex: 1,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
  });
