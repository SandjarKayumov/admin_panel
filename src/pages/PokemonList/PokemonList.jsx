import React, { useEffect, useState } from 'react';
import PokemonItem from '../../components/PokemonItem';
import axios from 'axios';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextPageUrl, setNextPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
    const [prevPageUrl, setPrevPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=20&limit=2 0');

    useEffect(() => {
        axios.get(currentPageUrl).then((response) => {
            setPokemon(response.data.results.map(p => p.name))
            console.log(pokemon)
        })
    }, [currentPageUrl]);
    if (!pokemon) return null;

    return (
        <div>
            <h2 className="page__title">Pokemon List</h2>
            <div className="pokemon__page">
                <PokemonItem pokemon={pokemon} />
            </div>
        </div>
    );
}

export default PokemonList;
