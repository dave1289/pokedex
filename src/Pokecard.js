import React from 'react'
import './Pokecard.css'

const Pokecard = ({id, name, type, bxp}) => {
   var spriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
   return (
   <div className='Pokecard' id={id}>
   <h1 className='Pokecard-name'>{name}</h1>
   <br></br>
   <img src={spriteURL} alt={name} className='Pokecard-img'></img>
   <br></br>
   <sub className='Pokecard-type'>Type: {type}</sub>
   <br></br>
   <sub className='Pokecard-xp'>EXP: {bxp}</sub>
   </div>
   )
}

export default Pokecard