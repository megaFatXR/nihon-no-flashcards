import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Retrieve theme from localStorage or default to 'light'
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Persist theme
      return newTheme;
    });
  };

  useEffect(() => {
    // Apply the theme to the document body
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
};
