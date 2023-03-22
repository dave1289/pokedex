import { render, screen } from '@testing-library/react';
import React from "react"
import Pokecard from './Pokecard';


it('renders our pokecards', () => {
   render(<Pokecard />);
});

it('matches snapshot', () => {
   const { asFragment } = render(<Pokecard />)
   expect(asFragment()).toMatchSnapshot()
})