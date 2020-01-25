import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Player List</h1>
      </div>
      <div className="dark-mode__toggle">
        <div
        // onClick={toggleMode}
        // className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </div>
  );
};

export default Navbar;
