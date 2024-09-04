import { createContext, useState, useContext, ReactNode } from 'react';
import { DefaultTheme, ThemeProvider,ThemeContext as StyledThemeContext} from 'styled-components';
import {themes  } from './theme';

interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  currentTheme: DefaultTheme;
  
}
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [themeDevice, setThemeDevice] = useState<'light' | 'dark'>(()=>{
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  })

  if (!themeDevice) {
    setThemeDevice('light');
    localStorage.setItem('theme', 'light');
  }
  const toggleTheme = () => {
    const newTheme = themeDevice === 'light' ? 'dark' : 'light'; 
    setThemeDevice(newTheme); 
    localStorage.setItem('theme', newTheme); 
  };
  const currentTheme : DefaultTheme = {
    colors:  themes.colors[themeDevice], 
    typography: themes.typography,
    breakpoint: themes.breakpoint,
  };
  return (
    <ThemeContext.Provider value={{ theme : themeDevice, toggleTheme,currentTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemes = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
};
export const useStyledTheme = () => {
  const theme = useContext(StyledThemeContext);
  if (!theme) {
    throw new Error('useStyledTheme must be used within a ThemeProvider');
  }
  return theme;
};