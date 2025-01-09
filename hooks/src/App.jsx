import React from "react";
import GreetingProvider from "./Components/Greetings/GreetingProvider";
import GreetingDisplay from "./Components/Greetings/GreetingDisplay";
import AuthProvider from "./Components/contexts/AppProvider";
import AppProvider from "./Components/contexts/AppProvider";
import ThemeLanguageSwitcher from "./Components/contexts/ThemeLanguageSwitcher";
const App = () => (
//  <GreetingProvider>
//   <GreetingDisplay/>
//  </GreetingProvider>
    <AppProvider>
        <ThemeLanguageSwitcher/>
    </AppProvider>

);

export default App;
