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
  const [error, setError] = useState(null);

  // Fetch ALL pages of characters
  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        setLoading(true);
        let allCharacters = [];
        let url = "https://rickandmortyapi.com/api/character";

        while (url) {
          const response = await fetch(url);
          const data = await response.json();

          allCharacters = [...allCharacters, ...data.results];
          url = data.info.next; // next page
        }

        setCharacters(allCharacters);
      } catch (err) {
        console.error(err);
        setError("Failed to load characters. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllCharacters();
  }, []);

  // Filter characters by search
  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <FavoritesProvider>
      <BrowserRouter>
        <div className="App">
          <Header onSearch={setSearch} />

          <div className="main-layout">
            <Sidebar />

            <div className="main-content">
              {error && <p className="error">{error}</p>}

              <Routes>
                <Route
                  path="/"
                  element={
                    loading ? (
                      <div className="loading">
                        <p>Loading characters...</p>
                      </div>
                    ) : (
                      <Home characters={filteredCharacters} />
                    )
                  }
                />

                <Route
                  path="/characters"
                  element={
                    loading ? (
                      <div className="loading">
                        <p>Loading characters...</p>
                      </div>
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
