import React from "react";

const Header = ({ search, onSearch }) => {
  return (
    <header className="header">
      <h1 className="logo">Rick & Morty Explorer</h1>

      <input
        type="text"
        className="search-input"
        placeholder="Search characters..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
