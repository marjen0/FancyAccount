import React, {useState} from 'react';
import {View} from 'react-native';
import {connect, MapDispatchToProps, ConnectedProps} from 'react-redux';
import {bindActionCreators} from 'redux';
import {useTheme} from '@context';
import {isEmailFormatValid} from '@utils/validation';
import {login} from '@core/actions/auth';
import {IRootState} from '@core/store';
import {
  TextInput,
  Screen,
  Button,
  Avatar,
  ActivityIndicator,
} from '@components';
import {getStyles} from './styles';

export interface ICredentials {
  username: string;
  password: string;
}

interface ISignInScreenProps extends PropsFromRedux {}

const SignInScreen = ({loginAction, isLoading}: ISignInScreenProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  const [username, setUsername] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const [usernameError, setUsernameError] = useState<boolean>(false);

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handleUsernameEndEditing = () => {
    if (!username) {
      return;
    }
    const isValid = isEmailFormatValid(username);
    setUsernameError(!isValid);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSubmitPress = async () => {
    if (!username || !password) {
      return;
    }
    setUsernameError(false);
    await loginAction({username, password});
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Screen>
      <View style={styles.container}>
        <Avatar
          size="medium"
          source={{uri: 'https://placeimg.com/80/80/tech'}}
        />
        <TextInput
          placeholderTextColor={theme.colors.text}
          autoCapitalize="none"
          placeholder="Username"
          value={username}
          error={usernameError}
          onChangeText={handleUsernameChange}
          onEndEditing={handleUsernameEndEditing}
          autoCorrect={false}
        />
        <TextInput
          autoCapitalize="none"
          placeholderTextColor={theme.colors.text}
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          autoCorrect={false}
          secureTextEntry
        />
        <Button
          width={'100%'}
          onPress={handleSubmitPress}
          disabled={!username && !password && !usernameError}
        >
          Submit
        </Button>
      </View>
    </Screen>
  );
};

const mapStateToProps = (state: IRootState) => {
  const {isLoading} = state.auth;
  return {
    isLoading,
  };
};
const mapDispatchToProps = (dispatch: MapDispatchToProps<any, any>) => ({
  loginAction: bindActionCreators(login, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SignInScreen);
