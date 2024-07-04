import { createContext, useState } from 'react';

export const themes = {
  darkMode: {
    background: '#1C252C',
    color: '#F6F2F6',
  },
  defaultMode: {
    background: '#9E9B98',
    color: '#1C252C',
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.defaultMode);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.defaultMode ? themes.darkMode : themes.defaultMode
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
