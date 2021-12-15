import React from 'react';
import {Image} from 'react-native';

import {useTheme} from '../../context';
import {getStyles} from './styles';

const AccountScreen = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return (
    <Image
      resizeMode="contain"
      style={styles.avatar}
      source={{uri: 'https://placeimg.com/80/80/tech'}}
    />
  );
};

export default AccountScreen;
