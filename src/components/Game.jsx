import React from 'react';
import { Link } from 'react-router-dom';

export default function Game({ name, description, pochette, deleteGame, id }) {
  return (
    <div className="game">
      <Link to={`/games/promo/${id}`}>
        <img src={pochette} alt={name} width="100px" />
        <h2>{name}</h2>
        <p>{description}</p>
        <button
          onClick={deleteGame}
        >Delete ME !!!</button>
      </Link>
    </div>
  );
}
