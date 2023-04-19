import React, { useEffect, useState } from 'react';
import PokemonItem from '../../components/PokemonItem';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import { Pagination } from '@mui/material';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(currentPageUrl).then((response) => {
            setLoading(false);
            setPokemon(response.data.results)
            console.log(pokemon)
        });
    }, [currentPageUrl]);
    // if (!pokemon) return null;
    if (loading) return "Loading..."

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