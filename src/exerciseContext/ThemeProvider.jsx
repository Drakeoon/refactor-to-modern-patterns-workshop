import React, { useState, useContext, createContext } from 'react';
import themes from './theme';
import { ThemeProvider as StyledProvider } from 'styled-components';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledProvider theme={themes[theme]}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  return themeContext;
};

export default ThemeProvider;
