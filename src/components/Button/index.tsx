import React, {ReactNode} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {getStyles} from './styles';
import {useTheme} from '../../context';

interface IButtonProps {
  children: ReactNode;
}

const Button = ({children}: IButtonProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity style={styles.container}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
