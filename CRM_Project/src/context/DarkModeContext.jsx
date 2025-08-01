import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const DarkModeContext = createContext();

// 2. Create a custom hook for easy access
export const useDarkMode = () => useContext(DarkModeContext);

// 3. Create the provider component
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
