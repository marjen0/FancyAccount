import React from 'react';
import {Text, View} from 'react-native';
import {Screen, Avatar} from '../../components';
import {useTheme} from '../../context';
import {getStyles} from './styles';

const AccountScreen = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return (
    <Screen>
      <View style={styles.container}>
        <Avatar />
        <Text style={styles.detailsText}>John Doe</Text>
        <Text style={styles.detailsText}>Adress</Text>
        <Text style={styles.detailsText}>Phone Number</Text>
      </View>
    </Screen>
  );
};

export default AccountScreen;
