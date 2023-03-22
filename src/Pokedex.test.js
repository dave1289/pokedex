import { render, screen } from '@testing-library/react';
import React from "react"
import Pokedex from './Pokedex';


it('renders pokedex', () => {
   render(<Pokedex pokemonArray={[
      {id: 149, name: 'Dragonite', type: 'dragon-flying', base_experience: 300}
    ]}/>);
});

it('matches snapshot', () => {
   const { asFragment } = render(<Pokedex pokemonArray={[
      {id: 149, name: 'Dragonite', type: 'dragon-flying', base_experience: 300}]} />)
   expect(asFragment()).toMatchSnapshot()
})