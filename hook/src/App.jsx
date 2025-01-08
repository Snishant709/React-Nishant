import ThemeProvider from "./Components/contexts/ThemeProvider";
import ThemeSwitcher from "./Components/contexts/ThemeSwitcher";

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default App;
