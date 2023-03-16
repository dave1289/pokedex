import React from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

const Pokedex = ({pokemonArray}) => {
   return (
      pokemonArray.map(p => 
      <div className='Pokedex'>
      <Pokecard id={p.id} name={p.name} type={p.type} bxp={p.base_experience} />
      </div>
   ))
}

export default Pokedex