import React, { useState } from "react";
import AppContext from "./AppContext";

// AppProvider component
const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  // Function to toggle theme between light and dark
  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // Function to chnage language between English and Hindi
  const switchLanguage = (newLanguage) => setLanguage(newLanguage);

  // Provide context values
  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, switchLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
