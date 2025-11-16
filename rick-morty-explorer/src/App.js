// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CharacterList from "./components/CharacterList";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch characters on mount
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (term) => setSearch(term);

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <FavoritesProvider>
      <BrowserRouter>
        <div className="App">
          <Header onSearch={handleSearch} />
          <div className="main-layout">
            <Sidebar />
            <div className="main-content">
              <Routes>
                <Route
  path="/"
  element={
    loading ? (
      <p>Loading...</p>
    ) : (
      <Home characters={filteredCharacters} />
    )
  }
/>

                <Route
                  path="/characters"
                  element={
                    loading ? (
                      <p>Loading...</p>
                    ) : (
                      <CharacterList characters={filteredCharacters} />
                    )
                  }
                />
                <Route path="/favorites" element={<Favorites />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
