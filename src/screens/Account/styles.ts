import {StyleSheet} from 'react-native';

export const getStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
    },
    detailsText: {
      marginBottom: 12,
      fontSize: 18,
      color: theme.colors.text,
    },
    darkModeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
    },
    darkModeText: {
      marginRight: 8,
      color: theme.colors.text,
    },
  });
