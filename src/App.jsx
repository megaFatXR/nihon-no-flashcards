import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FlashcardPage from "./pages/FlashcardPage";
import WordListPage from "./pages/WordListPage";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const lightTheme = {
  background: "#fff",
  text: "#000",
  cardBg: "#f0f0f0",
  cardText: "#000",
};

const darkTheme = {
  background: "#111",
  text: "#fff",
  cardBg: "#333",
  cardText: "#fff",
};

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <nav className="main-nav">
          <Link className="main-nav-link" to="/">Flashcards</Link>
          <Link className="main-nav-link" to="/list">Word List</Link>
          <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        </nav>
        <Routes>
          <Route path="/" element={<FlashcardPage />} />
          <Route path="/list" element={<WordListPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
