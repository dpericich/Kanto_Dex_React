import React from 'react'
import Pokemon from './Pokemon'

export default function PokemonList({ pokemon }) {
    return (
        <div>
            {pokemon.map(p => ( 
                <Pokemon key={p} pokemon = {p}/>
            ))}
        </div>
    )
}
