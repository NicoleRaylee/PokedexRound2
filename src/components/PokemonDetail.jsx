import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

const PokemonDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchPokemon();
    }, [id]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <button onClick={() => navigate('/')}>Back to Pokedex</button>
            <h1>{pokemon.name}</h1>
            <div className="pokeSprite">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <img src={pokemon.sprites.front_shiny} alt={pokemon.name}/>
            </div>
            <div className='HWT'>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
            </div>
            
            <div className='base-stats'>
            <h2>Base Stats</h2>
                {pokemon.stats.map(stat => (
                    <div key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</div>
                ))}
            </div>
            <header class='Moves'><h2>Moves</h2></header>
            <div className='move-list'>
                {pokemon.moves.slice(0, 30).map(move => (
                    <div key={move.move.name} className="move-card">
                        {move.move.name}
                    </div>
                ))}
        </div> 
        </div>
    );
};

export default PokemonDetail;