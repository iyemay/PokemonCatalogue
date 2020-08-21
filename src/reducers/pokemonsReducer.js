import {
    POKEMON_ATTACKS_LOADING, POKEMON_ATTACKS_RECEIVED, POKEMON_ATTACKS_FAILED, GET_POKEMONS,
    SET_PAGE_SIZE, POKEMONS_RECEIVED, POKEMONS_LOADING, POKEMONS_FAILED
} from "../actions/actions";

export const PENDING = "PENDING";
export const FULLFILLED = "FULLFILLED";
export const FAILED = "FAILED";

const initialState = {
    pageSize: 10,
    pokemonsList: [],
    pokemonAttacksRetrievalStatus: PENDING, // ["PENDING", "FULLFIELD", "FAILED"]
    pokemonsRetrievalStatus: PENDING,
    currentPokemonAttacks: []
}

export default function pokemonsReducer(state
                                            = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemonsList: action.pokemons,
            }
        case POKEMONS_LOADING:
            return {
                ...state,
                pokemonsRetrievalStatus: PENDING,
                pokemonsList: []
            }
        case POKEMONS_RECEIVED:
            return {
                ...state,
                pokemonsRetrievalStatus: FULLFILLED,
                pokemonsList: action.pokemons
            }
        case POKEMONS_FAILED:
            return {
                ...state,
                pokemonsRetrievalStatus: FAILED
            }
        case POKEMON_ATTACKS_LOADING:
            return {
                ...state,
                pokemonAttacksRetrievalStatus: PENDING,
                currentPokemonAttacks: []
            }
        case POKEMON_ATTACKS_RECEIVED:
            return {
                ...state,
                pokemonAttacksRetrievalStatus: FULLFILLED,
                currentPokemonAttacks: action.pokemonAttacks
            }
        case POKEMON_ATTACKS_FAILED:
            return {
                ...state,
                pokemonAttacksRetrievalStatus: FAILED
            }
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.pageSize
            }
        default:
            return state;
    }
}