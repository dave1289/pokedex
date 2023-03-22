import React from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

const Pokedex = ({ pokemonArray }) => {
   return (
      <>
         <h1 className='Pokedex-title' id='1'>Pokedex</h1>
         <div className='Pokedex'>
            {pokemonArray.map(p => (
               <div className='Pokedex-Pokecards'>
                  <Pokecard id={p.id} name={p.name} type={p.type} bxp={p.base_experience} />
               </div>))}
         </div>
      </>
   )
}

export default Pokedex