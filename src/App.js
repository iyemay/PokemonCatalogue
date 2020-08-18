import React from 'react';
import './App.scss';
import HeaderCatalogue from "./components/HeaderCatalogue/HeaderCatalogue";
import DropdownPokemonRender from "./components/DropdownPokemonRender/DropdownPokemonRender";
import CardPokemon from "./components/CardPokemon/CardPokemon";

function App() {
  return (
    <div>
        <HeaderCatalogue />
        <DropdownPokemonRender />
        <CardPokemon />
    </div>
  );
}

export default App;
