import React, {useState, ReactNode} from 'react';
import {useColorScheme} from 'react-native';
import {createContext} from '../../hooks';
import {getTheme} from '../../styles/theme';

interface IThemeContextProps {
  children: ReactNode;
}

const [useContext, ThemeContext] = createContext();

export const useTheme = () => useContext();

const ThemeProvider = ({children}: IThemeContextProps) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState<boolean>(colorScheme === 'dark');
  const theme = getTheme(isDark);

  return (
    <ThemeContext.Provider value={{isDark, setIsDark, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
