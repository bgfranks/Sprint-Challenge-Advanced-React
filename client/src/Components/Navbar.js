import React from "react";
import { useDarkMode } from "../Hooks/useDarkMode";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="navbar" data-testid="navbar">
      <div className="logo">
        <h1>Player List</h1>
      </div>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </div>
  );
};

export default Navbar;
