// src/components/CharacterList.js
import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import "./CharacterList.css";

export default function CharacterList({ characters }) {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  // Check if character is already in favorites
  const isFavorite = (id) => favorites.some((char) => char.id === id);

  return (
    <div className="page">
      <h1>Characters</h1>
      <div className="cards">
        {characters.map((char) => (
          <div key={char.id} className="card">
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
            <p>{char.species}</p>
            <p>{char.status}</p>

            {isFavorite(char.id) ? (
              <button onClick={() => removeFavorite(char.id)}>Remove from Favorites</button>
            ) : (
              <button onClick={() => addFavorite(char)}>Add to Favorites</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
