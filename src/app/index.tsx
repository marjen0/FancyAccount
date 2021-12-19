import React, {useEffect} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {RootNavigator} from '@navigation';
import {ThemeProvider} from '@context';
import store from '@core/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
