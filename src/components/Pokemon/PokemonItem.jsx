import React from 'react';
import "./Pokemon.scss";
const PokemonItem = ({ pokemon }) => {
    return (
        <div className="pokemon__card_items">
            {pokemon.length && pokemon.map((pok) =>
                <div
                    className="pokemon__card_item"
                    key={pok.name}
                    url={pok.url}
                >
                    {/* <img src={pok.url}  /> */}
                    <h3>{pok.name}</h3>
                </div>
            )}

        </div>
    );
}

export default PokemonItem;