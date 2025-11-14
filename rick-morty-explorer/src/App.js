
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import './App.css';

function App() {
  const [search, setSearch] = useState("");

        useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
   
 return (
   
        <Header onSearch={handleSearch} />
       
  );
}

export default App;
