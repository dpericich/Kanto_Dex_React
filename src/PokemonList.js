import React from 'react'
import Pokemon from './Pokemon'

export default function PokemonList({ name }) {
    let pokemonListStyle = {
        display: 'flex',
        flexWrap: 'wrap',
    }
    return (
        <div style={pokemonListStyle}>
            {name.map(p => ( 
                <Pokemon key={p} name = {p}/>
            ))}
        </div>
    )
}
