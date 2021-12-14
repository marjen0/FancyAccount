import React from 'react';
import {RootNavigator} from '../navigation';
import {ThemeProvider} from '../context';

const App = () => {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
};

export default App;
