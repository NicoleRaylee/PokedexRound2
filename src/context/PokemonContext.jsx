import React, { createContext } from 'react';
import usePokeFetch from '../hooks/usePokeFetch';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const { data: pokemons, loading } = usePokeFetch('https://pokeapi.co/api/v2/pokemon');

    return (
        <PokemonContext.Provider value={{ pokemons, loading }}>
            {children}
        </PokemonContext.Provider>
    );
};