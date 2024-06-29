import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
