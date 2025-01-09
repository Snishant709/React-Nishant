import React from "react";
import GreetingProvider from "./Components/Greetings/GreetingProvider";
import GreetingDisplay from "./Components/Greetings/GreetingDisplay";

const App = () => (
  <GreetingProvider>
    <GreetingDisplay />
  </GreetingProvider>
);

export default App;
