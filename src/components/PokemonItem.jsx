import React from 'react';

const PokemonItem = ({ pokemon }) => {
    return (
        <div>
            {pokemon.name}
           <img src={pokemon.url}/>
        </div>
    );
}

export default PokemonItem;