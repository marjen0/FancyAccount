import React, {useState, ReactNode, SetStateAction, Dispatch} from 'react';
import {useColorScheme} from 'react-native';
import {createContext} from '../../hooks';
import {getTheme} from '../../styles/theme';

interface IThemeContextProps {
  children: ReactNode;
}

interface IThemeContext {
  theme: ReturnType<typeof getTheme>;
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

const [useContext, ThemeContext] = createContext<IThemeContext>();

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
