import React, { createContext, useState } from 'react';

// Define los temas light y dark
const themes = {
    light: {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      accentColor: '#1C1F33',
      secondaryBackground: '#F5F5F5',
      highlightColor: '#006eb8',
    },
    dark: {
      backgroundColor: '#000000',
      color: '#FFFFFF',
      accentColor: '#40E0D0',
      secondaryBackground: '#1C1C1C',
      highlightColor: '#FF5722',
    },
  };

// Crea el contexto
export const ThemeContext = createContext();

// Crea el proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
