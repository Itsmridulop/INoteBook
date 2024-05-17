import React, { useState } from 'react';
export const DarkModeContext = React.createContext();

const DarkModeState = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const root = document.getElementById('root')
    root.style.background = !darkMode ? 'rgb(63 63 70 )' : 'white'
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children} 
    </DarkModeContext.Provider>
  );
};

export default DarkModeState;
