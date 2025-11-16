// src/components/Favorites.js
import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import "./Favorites.css";

export default function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="page">
      <h1>Your Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet. Go add some!</p>
      ) : (
        <div className="cards">
          {favorites.map((char) => (
            <div key={char.id} className="card">
              <img src={char.image} alt={char.name} />
              <h3>{char.name}</h3>
              <p>{char.species}</p>
              <p>{char.status}</p>
              <button onClick={() => removeFavorite(char.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
