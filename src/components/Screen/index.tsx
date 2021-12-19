import React, {ReactNode} from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {useTheme} from '@context';
import {getStyles} from './styles';

interface IScreenProps {
  children: ReactNode;
}

const Screen = ({children}: IScreenProps) => {
  const {theme, isDark} = useTheme();
  const styles = getStyles(theme);

  return (
    <>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.childrenContainer}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default Screen;
