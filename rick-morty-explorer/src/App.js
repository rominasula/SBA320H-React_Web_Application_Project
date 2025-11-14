import React, { useState, useEffect } from "react";
import { FavoritesProvider } from "./context/FavoritesContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CharacterList from "./components/CharacterList";
import Favorites from "./components/Favorites";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

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
      <div className="App">
        <Header onSearch={handleSearch} />
        <Sidebar />
        {loading ? <p>Loading...</p> : <CharacterList characters={filteredCharacters} />}
        <Favorites />
      </div>
    </FavoritesProvider>
  );
}

export default App;
