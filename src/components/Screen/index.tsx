import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {useTheme} from '../../context';
import {getStyles} from './styles';

interface IScreenProps {
  children: ReactNode;
}

const Screen = ({children}: IScreenProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return <View style={styles.container}>{children}</View>;
};

export default Screen;
