import React, {ReactNode} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@context';
import {getStyles} from './styles';

interface IButtonProps {
  children: ReactNode;
  width?: number | string;
  background?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

const Button = ({
  width,
  background = true,
  disabled = false,
  onPress,
  children,
}: IButtonProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  const wrapperStyles = {
    width,
    backgroundColor: background ? theme.colors.accentPrimary : 'transparent',
  };
  const textStyles = {
    color: background ? theme.colors.text : theme.colors.label,
  };

  return (
    <TouchableOpacity
      style={[styles.container, wrapperStyles]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
