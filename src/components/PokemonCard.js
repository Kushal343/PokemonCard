import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get(pokemon.url)
      .then(response => setPokemonData(response.data))
      .catch(error => console.log(error));
  }, [pokemon.url]);

  return (
    <div className="pokemon-card">
      {pokemonData && (
        <>
          <img src={pokemonData.sprites.front_default} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
        </>
      )}
    </div>
  );
};

export default PokemonCard;
