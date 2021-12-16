import React from 'react';
import {View} from 'react-native';
import {TextInput, Screen, Button, Avatar} from '../../components';
import {useTheme} from '../../context';
import {getStyles} from './styles';

const SignInScreen = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  const handleSubmitPress = () => {
    console.log('log in');
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Avatar size="medium" />
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" />
        <Button width={'100%'} onPress={handleSubmitPress}>
          Submit
        </Button>
      </View>
    </Screen>
  );
};

export default SignInScreen;
