import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export function Header({ theme, value, handleText, toggleTheme, themeIcon }) {
  
  return (
    <header className={"header " + theme}>
      <div className="site_name">
        <h1>
          <a href="/">
            <span>Express</span> News
          </a>
        </h1>
      </div>

      <nav className="navbar">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search..."
            value={value}
            onChange={handleText}
          />
        </div>
        <button className="themeBtn" onClick={toggleTheme}>
          <i className={"fa-solid fa-" + themeIcon}></i>
        </button>
        <ul className="nav">
          <li>
            <Link to="/">Headlines</Link>
          </li>
          <li>
            <Link to="/epaper">ePaper</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <button className="login btn">Login</button>
      </nav>
    </header>
  );
}
