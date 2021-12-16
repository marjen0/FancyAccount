import React from 'react';
import {Image} from 'react-native';

import {useTheme} from '../../context';
import {getStyles, getWidth} from './styles';

export type AvatarSize = 'icon' | 'small' | 'medium' | 'large' | 'stretch';
interface IAvatarProps {
  size: AvatarSize;
}

const Avatar = ({size}: IAvatarProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const width = getWidth(size);
  return (
    <Image
      resizeMode="contain"
      style={[styles.avatar, width]}
      source={{uri: 'https://placeimg.com/80/80/tech'}}
    />
  );
};

export default Avatar;
