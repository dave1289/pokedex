import { render, screen } from '@testing-library/react';
import React from "react"
import App from './App';

it('renders our pokecards should contain mewtwo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mewtwo/);
  expect(linkElement).toBeInTheDocument();
});
it('renders pokedex', () => {
   render(<App />);
   const linkElement = screen.getByText(/Pokedex/);
   expect(linkElement).toBeInTheDocument();
 });