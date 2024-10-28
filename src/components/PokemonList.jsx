import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import PokeCard from './PokeCard';
import Spinner from './Spinner';

const PokemonList = () => {
    const { pokemons, loading } = useContext(PokemonContext);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <div className="pokemon-list">
                {pokemons.map(pokemon => (
                    <PokeCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default PokemonList;