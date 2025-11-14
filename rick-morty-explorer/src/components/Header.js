import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header>
      <h1>Rick & Morty Explorer</h1>
    
    </header>
  );
};

export default Header;
