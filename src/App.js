import React from 'react';
import './App.scss';
import HeaderCatalogue from "./components/HeaderCatalogue/HeaderCatalogue";
import DropdownPokemonRender from "./components/DropdownPokemonRender/DropdownPokemonRender";
import ListCardPokemon from "./components/ListCardPokemon/ListCardPokemon";

function App() {
  return (
    <div className="d-flex flex-column mx-auto w-75">
        <HeaderCatalogue />
        <DropdownPokemonRender />
        <ListCardPokemon />
    </div>
  );
}

export default App;
