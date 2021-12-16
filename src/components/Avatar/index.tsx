import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';

import {useTheme} from '../../context';
import {getStyles, getWidth} from './styles';

export type AvatarSize = 'icon' | 'small' | 'medium' | 'large' | 'stretch';
interface IAvatarProps {
  size: AvatarSize;
  source: ImageSourcePropType;
}

const Avatar = ({size, source}: IAvatarProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const width = getWidth(size);
  return (
    <Image
      resizeMode="contain"
      style={[styles.avatar, width]}
      source={source}
    />
  );
};

export default Avatar;
