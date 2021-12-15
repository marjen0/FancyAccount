import React, {useEffect} from 'react';
import {RootNavigator} from '../navigation';
import {ThemeProvider} from '../context';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
};

export default App;
