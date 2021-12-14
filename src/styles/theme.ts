import {DefaultTheme, DarkTheme} from '@react-navigation/native';

export const lightColors = {
  ...DefaultTheme.colors,
  primary: '#003480',
  secondary: '#009FE3',
  accentPrimary: '#FEBA01',
  accentSecondary: '#660700',
};
export const darkColors = {
  ...DarkTheme.colors,
  primary: '#003480',
  secondary: '#009FE3',
  accentPrimary: '#FEBA01',
  accentSecondary: '#660700',
};

export const getTheme = (isDarkMode: boolean) => {
  colors: isDarkMode ? darkColors : lightColors;
  roundness: 4;
};
