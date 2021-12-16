import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountScreen} from '../../screens';
import {Button} from '../../components';

const Stack = createNativeStackNavigator();

interface IMainStackProps {
  onLogout: () => void;
}

const MainStack = ({onLogout}: IMainStackProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button background={false} onPress={onLogout}>
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
