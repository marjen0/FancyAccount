import React, {ReactNode} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {getStyles} from './styles';
import {useTheme} from '../../context';

interface IButtonProps {
  children: ReactNode;
  width?: number | string;
  background?: boolean;
  onPress: () => void;
}

const Button = ({width, background = true, children}: IButtonProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  const wrapperStyles = {
    width,
    backgroundColor: background ? theme.colors.primary : 'transparent',
  };
  const textStyles = {
    color: background ? theme.colors.background : theme.colors.label,
  };

  return (
    <TouchableOpacity style={[styles.container, wrapperStyles]}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
