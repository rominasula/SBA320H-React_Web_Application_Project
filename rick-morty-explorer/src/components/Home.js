// Home.js
import React from "react";
import CharacterList from "./CharacterList";
import "./Home.css";

export default function Home({ characters }) {
  return (
    <div className="home-page">
      <h1>Welcome to Rick & Morty Explorer!</h1>
      <p>Search above or click Characters in the sidebar.</p>

      {/* Show characters ONLY if user typed something */}
      {characters.length > 0 && (
        <div className="search-results">
          <h2>Search Results:</h2>
          <CharacterList characters={characters} />
        </div>
      )}
    </div>
  );
}


