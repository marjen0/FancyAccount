import {DefaultTheme, DarkTheme} from '@react-navigation/native';

const lightColors = {
  ...DefaultTheme.colors,
  primary: '#003480',
  secondary: '#009FE3',
  accentPrimary: '#FEBA01',
  label: '#007AFF',
  accentSecondary: '#660700',
  error: '#ff3333',
};
const darkColors = {
  ...DarkTheme.colors,
  primary: '#003480',
  secondary: '#009FE3',
  accentPrimary: '#660700',
  label: '#007AFF',
  accentSecondary: '#660700',
  error: '#ff3333',
};

export const getTheme = (isDarkMode: boolean) => ({
  colors: isDarkMode ? darkColors : lightColors,
  roundness: 4,
});
