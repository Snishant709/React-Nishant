import React from "react";
import GreetingContext from "./GreetingContext";

// Create GreetingProvider component
const GreetingProvider = ({ children }) => {
  const greeting = "Hello, welcome!"; // The greeting message

  // Provide the greeting message to children
  return (
    <GreetingContext.Provider value={greeting}>
      {children}
    </GreetingContext.Provider>
  );
};

export default GreetingProvider;
