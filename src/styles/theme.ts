import {DefaultTheme, DarkTheme} from '@react-navigation/native';

const lightColors = {
  ...DefaultTheme.colors,
  background: '#FFF',
  primary: '#003480',
  secondary: '#009FE3',
  accentPrimary: '#FEBA01',
  label: '#007AFF',
  accentSecondary: '#660700',
};
const darkColors = {
  ...DarkTheme.colors,
  background: '#FFF',
  primary: '#003480',
  secondary: '#009FE3',
  accentPrimary: '#FEBA01',
  label: '#007AFF',
  accentSecondary: '#660700',
};

export const getTheme = (isDarkMode: boolean) => ({
  colors: isDarkMode ? darkColors : lightColors,
  roundness: 4,
});
