import React from 'react'
import pokeball from './pokeball.png'

export default function Pokemon({ name }) {
    return (
        <div style={pokemonStyle}>
            <div style={pokemonName}>
            {name.toUpperCase()}
            </div>
        </div>
    )
}

const pokemonName ={
    backgroundColor: "lightgrey",
    borderRadius: "5px",
    width: "66.66%",
    margin: 'auto',
}

const pokemonStyle = {
    width: '200px',
    height:'300px',
    backgroundImage: `url('${pokeball}')`,
    backgroundSize: 'contain',
    backgroundRepeat: "no-repeat",
    textAlign: 'center',
    flexBasis: '25%',
    borderRadius: "15px",
    margin: "auto",

}
