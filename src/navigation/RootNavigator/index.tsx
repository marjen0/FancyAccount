import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {connect, ConnectedProps} from 'react-redux';
import AuthStack from '../AuthStack';
import MainStack from '../MainStack';
import {useTheme} from '../../context';

import type {IAuthState} from '../../core/reducers/auth';

const Stack = createNativeStackNavigator();

interface IRootNavigatorProps extends PropsFromRedux {}

const RootNavigator = ({isAuthenticated}: IRootNavigatorProps) => {
  const {theme, isDark} = useTheme();

  return (
    <NavigationContainer theme={{colors: theme.colors, dark: isDark}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isAuthenticated ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="MainStack" component={MainStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = (state: IAuthState) => {
  const {isAuthenticated} = state.auth;
  return {
    isAuthenticated,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(RootNavigator);
