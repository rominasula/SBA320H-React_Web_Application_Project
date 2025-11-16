import React, { useEffect, useState } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  return (
    <div className="page">
      <h1>Your Favorites</h1>

      {favorites.length === 0 ? (
        <p>You don't have any favorites yet.</p>
      ) : (
        <div className="cards">
          {favorites.map((char) => (
            <div key={char.id} className="card">
              <img src={char.image} alt={char.name} />
              <h3>{char.name}</h3>
              <p>{char.species}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
