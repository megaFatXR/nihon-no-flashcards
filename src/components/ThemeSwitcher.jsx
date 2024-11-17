import React from "react";
import { Switch } from "@mui/material";

const ThemeSwitcher = ({ theme, toggleTheme }) => (
  <div style={{    "line-height": "52px"}}>
    <Switch checked={theme === "dark"} onChange={toggleTheme} />
    <label>{theme === "dark" ? "Dark Mode" : "Light Mode"}</label>
  </div>
);

export default ThemeSwitcher;
