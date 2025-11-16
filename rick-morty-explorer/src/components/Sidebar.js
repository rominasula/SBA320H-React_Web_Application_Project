// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h2 className="sidebar-title">Rick & Morty Explorer</h2>
      <ul className="sidebar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  );
}
