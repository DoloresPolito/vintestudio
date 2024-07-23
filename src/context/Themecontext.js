"use client"
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('theme-1');

  const toggleTheme = (themeName) => {
    setTheme(themeName);
  };

  // const fonts = {
  //   fira: {
  //     fontFamily: 'Fira Sans, sans-serif',
  //     variable: '--font-fira',
  //   },
  //   josefin: {
  //     fontFamily: 'Josefin Sans, sans-serif',
  //     variable: '--font-jose',
  //   },
  // };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme
    // , fonts 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};