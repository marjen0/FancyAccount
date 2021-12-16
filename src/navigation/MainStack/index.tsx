import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountScreen} from '../../screens';
import {Button} from '../../components';

const Stack = createNativeStackNavigator();

const handleLogoutPress = () => {
  console.log('logout');
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button background={false} onPress={handleLogoutPress}>
              Logout
            </Button>
          ),
        }}
        name="Account"
        component={AccountScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
