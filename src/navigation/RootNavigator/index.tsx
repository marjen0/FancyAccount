import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from 'navigation/AuthStack';
import MainStack from 'navigation/MainStack';
import {useTheme} from '../../context';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {theme, isDark} = useTheme();
  const user = false;
  console.log(theme.colors);
  return (
    <NavigationContainer theme={{colors: theme.colors, dark: isDark}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!user ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="MainStack" component={MainStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
