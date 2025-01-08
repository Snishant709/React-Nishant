import React, { useContext } from "react";
import GreetingContext from "./GreetingContext";

// Component to display the greeting message
const GreetingDisplay = () => {
  const greeting = useContext(GreetingContext); // Access the greeting message

  return <p>{greeting}</p>;
};

export default GreetingDisplay;
