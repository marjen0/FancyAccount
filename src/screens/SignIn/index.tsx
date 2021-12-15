import React from 'react';
import {View} from 'react-native';
import {TextInput, Screen, Button, Avatar} from '../../components';

const SignInScreen = () => {
  return (
    <Screen>
      <View style={{alignItems: 'center'}}>
        <Avatar />
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" />
        <Button>Submit</Button>
      </View>
    </Screen>
  );
};

export default SignInScreen;
