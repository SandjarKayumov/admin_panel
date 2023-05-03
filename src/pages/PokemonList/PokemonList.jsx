import React, { useEffect, useState } from 'react';
import PokemonItem from '../../components/Pokemon/PokemonItem';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import { Pagination } from '@mui/material';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const URL = "https://pokeapi.co/api/v2/pokemon";
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get(URL).then((response) => {
            setLoading(false);
            setPokemon(response.data.results)
            console.log(pokemon)
        })
            .catch(() =>
                console.error("Ошибка..."))
    }, []);
    if (!pokemon) return null;
    // if (loading) return "Loading..."

    return (
        <div>
            <h2 className="page__title">Pokemon List. Count:{pokemon.length}</h2>
            <div className="pokemon__page">
                {loading && <Loader />}
                {pokemon.length >= 1 ? (
                    <PokemonItem pokemon={pokemon} />
                ) : (
                    <h2
                        style={{
                            color: "rgb(255, 0, 0)",
                            textAlign: "center",
                            fontWeight: "500",
                        }}
                    >
                        No Pokemons!
                    </h2>
                )}
                <img src={pokemon.sprites} alt="" />
            </div>
        </div>
    );
}

export default PokemonList;