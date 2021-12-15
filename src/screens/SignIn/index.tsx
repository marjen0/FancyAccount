import React from 'react';
import {Image, View} from 'react-native';
import {TextInput, Screen, Button} from '../../components';
import {useTheme} from '../../context';
import {getStyles} from './styles';

const SignInScreen = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  return (
    <Screen>
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://placeimg.com/80/80/tech'}}
        />

        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" />
        <Button>Submit</Button>
      </View>
    </Screen>
  );
};

export default SignInScreen;
