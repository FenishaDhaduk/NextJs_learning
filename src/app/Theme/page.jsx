"use client";
import ThemeContext from "@/context/themeContext";
import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, "theme");
  return (
    <div className="inline-flex mt-[4px]" onClick={toggleTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </div>
  );
};

export default ThemeToggle;
