import React, { createContext, useState } from "react";
import Button from "../components/button";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    setIsDark((isDark) => !isDark);
  };
  return (
    <div className={`flex flex-col gap-20 pb-20 items-center justify-center h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <Button
          title={`Switch to ${isDark ? "light" : "dark"} theme`}
          color="bg-gray-700"
          onClick={toggleTheme}
        />
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
