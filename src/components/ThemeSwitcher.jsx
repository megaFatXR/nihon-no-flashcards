import React from "react";
import { Switch } from "@mui/material";

const ThemeSwitcher = ({ theme, toggleTheme }) => (
  <div style={{    "lineHeight": "52px"}}>
    <Switch checked={theme === "dark"} onChange={toggleTheme} />
    <label>{theme === "dark" ? "Dark" : "Light"}</label>
  </div>
);

export default ThemeSwitcher;
