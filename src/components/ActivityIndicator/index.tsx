import React from 'react';
import {View, ActivityIndicator as RNActivityIndicator} from 'react-native';
import {getStyles} from './styles';
import {useTheme} from '@context';

const ActivityIndicator = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <RNActivityIndicator />
    </View>
  );
};

export default ActivityIndicator;
