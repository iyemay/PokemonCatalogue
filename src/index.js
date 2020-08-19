import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderCatalogue from "./components/HeaderCatalogue/HeaderCatalogue.scss";
import DropdownPokemonRender from "./components/DropdownPokemonRender/DropdownPokemonRender.scss";
import CardPokemon from "./components/CardPokemon/CardPokemon.scss";
import ListCardPokemon from "./components/ListCardPokemon/ListCardPokemon.scss";
import { getPokemons } from "./actions/actions";
import pokemonsReducer from "./reducers/pokemonsReducer";

const store = createStore(pokemonsReducer, applyMiddleware(thunk, logger));

store.dispatch(getPokemons());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
