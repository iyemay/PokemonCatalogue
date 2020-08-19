import { GET_POKEMONS } from "../actions/actions";

const initialState = { pokemonsList: [] }

export default function pokemonsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            //return action.pokemons;
            return {
                pokemonsList: action.pokemons
            }
        default:
            return state;
    }
}