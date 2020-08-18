import React from 'react';
import './App.scss';
import HeaderCatalogue from "./components/HeaderCatalogue/HeaderCatalogue";
import DropdownPokemonRender from "./components/DropdownPokemonRender/DropdownPokemonRender";

function App() {
  return (
    <div>
        <HeaderCatalogue />
        <DropdownPokemonRender />
    </div>
  );
}

export default App;
