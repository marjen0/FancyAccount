import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {connect, ConnectedProps, MapDispatchToProps} from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthStack from '../AuthStack';
import MainStack from '../MainStack';
import {useTheme} from '../../context';
import {IRootState} from '../../core/store';
import {logout} from '../../core/actions/auth';

const Stack = createNativeStackNavigator();

interface IRootNavigatorProps extends PropsFromRedux {}

const RootNavigator = ({
  isAuthenticated,
  logoutAction,
}: IRootNavigatorProps) => {
  const {theme, isDark} = useTheme();

  const handleLogoutPress = () => {
    logoutAction();
  };

  return (
    <NavigationContainer theme={{colors: theme.colors, dark: isDark}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isAuthenticated ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="MainStack">
            {props => <MainStack {...props} onLogout={handleLogoutPress} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = (state: IRootState) => {
  const {isAuthenticated} = state.auth;
  return {
    isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch: MapDispatchToProps<any, any>) => ({
  logoutAction: bindActionCreators(logout, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(RootNavigator);
