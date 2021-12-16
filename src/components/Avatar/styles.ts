import {StyleSheet, Dimensions} from 'react-native';
import {AvatarSize} from './';

const windowWidth = Dimensions.get('window').width - 32; // window width - screen padding

export const getStyles = (_theme: ITheme) =>
  StyleSheet.create({
    avatar: {
      marginBottom: 34,
    },
  });
export const getWidth = (size: AvatarSize) => {
  switch (size) {
    case 'icon':
      return {
        width: windowWidth,
        height: windowWidth,
        maxWidth: 600,
        maxHeight: 600,
        borderRadius: 300,
      };

    case 'small':
      return {
        width: '100%',
        height: '100%',
        maxWidth: 100,
        maxHeight: 100,
        borderRadius: 50,
      };
    case 'medium':
      return {
        width: '100%',
        height: '100%',
        maxWidth: 200,
        maxHeight: 200,
        borderRadius: 100,
      };
    case 'large':
      return {
        width: '100%',
        height: '100%',
        maxWidth: 350,
        maxHeight: 350,
        borderRadius: 175,
      };
    case 'stretch':
      return {
        width: windowWidth,
        height: windowWidth,
        maxWidth: 600,
        maxHeight: 600,
        borderRadius: 300,
      };

    default:
      return {
        width: windowWidth,
        height: windowWidth,
        maxWidth: 600,
        maxHeight: 600,
      };
  }
};
