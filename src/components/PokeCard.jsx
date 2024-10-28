import React from 'react';
import { Link } from 'react-router-dom';

const PokeCard = ({ pokemon }) => {
    return (
        <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
            <div className="poke-card">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h3>{pokemon.name}</h3>
            </div>
        </Link>
    );
};

export default PokeCard;