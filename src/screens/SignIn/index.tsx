import React, {useState} from 'react';
import {View} from 'react-native';
import {connect, MapDispatchToProps, ConnectedProps} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../../core/actions/auth';
import type {IAuthState} from '../../core/reducers/auth';
import {TextInput, Screen, Button, Avatar} from '../../components';
import {useTheme} from '../../context';
import {getStyles} from './styles';

export interface ICredentials {
  username: string;
  password: string;
}

interface ISignInScreenProps extends PropsFromRedux {}

const SignInScreen = ({loginAction}: ISignInScreenProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  const [username, setusername] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const handleusernameChange = (text: string) => {
    setusername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSubmitPress = async () => {
    if (!username || !password) {
      return;
    }
    await loginAction({username, password});
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Avatar size="medium" />
        <TextInput
          autoCapitalize="none"
          placeholder="Username"
          value={username}
          onChangeText={handleusernameChange}
          autoCorrect={false}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          autoCorrect={false}
          secureTextEntry
        />
        <Button width={'100%'} onPress={handleSubmitPress}>
          Submit
        </Button>
      </View>
    </Screen>
  );
};

const mapStateToProps = (state: IAuthState) => {
  const {isLoading, isAuthenticated} = state.auth;
  return {
    isLoading,
    isAuthenticated,
  };
};
const mapDispatchToProps = (dispatch: MapDispatchToProps<any, any>) => ({
  loginAction: bindActionCreators(login, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SignInScreen);
