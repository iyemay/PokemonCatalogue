import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderCatalogue from "./components/HeaderCatalogue/HeaderCatalogue.scss";
import DropdownPokemonRender from "./components/DropdownPokemonRender/DropdownPokemonRender.scss";
import CardPokemon from "./components/CardPokemon/CardPokemon.scss";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
