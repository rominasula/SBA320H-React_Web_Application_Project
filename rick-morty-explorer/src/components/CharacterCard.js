import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const CharacterCard = ({ character }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((char) => char.id === character.id);

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
      <button onClick={() => (isFavorite ? removeFavorite(character.id) : addFavorite(character))}>
        {isFavorite ? "Remove Favorite" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default CharacterCard;
