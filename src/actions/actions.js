import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
export const POKEMON_ATTACKS_LOADING = 'POKEMON_ATTACKS_LOADING';
export const POKEMON_ATTACKS_RECEIVED = 'POKEMON_ATTACKS_RECEIVED';
export const POKEMON_ATTACKS_FAILED = 'POKEMON_ATTACKS_FAILED';
const apiUrl = 'https://pokeapi.co/api/v2';

export function setPageSizeAction(pageSize) {
    return {
        type: SET_PAGE_SIZE,
        pageSize: pageSize
    }
}

export function getPokemonsAction(pokemons) {
    return {
        type: GET_POKEMONS,
        pokemons: pokemons
    }
}

export function pokemonAttacksLoading() {
    return {
        type: POKEMON_ATTACKS_LOADING
    }
}

export function pokemonAttacksReceived(pokemonAttacks) {
    return {
        type: POKEMON_ATTACKS_RECEIVED,
        pokemonAttacks: pokemonAttacks
    }
}

export function pokemonAttacksFailed() {
    return {
        type: POKEMON_ATTACKS_FAILED
    }
}

export const getPokemons = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/pokemon?offset=0&limit=100`)
            .then(response => {
                let pokemonRequests = [];

                response.data.results.forEach((pokemon, i) => {
                    pokemonRequests = [
                        ...pokemonRequests,
                        pokemonPromise(pokemon, i)
                    ];
                });

                Promise.all(pokemonRequests).then((pokemons) => {
                    dispatch(getPokemonsAction(pokemons));
                });
            })
            .catch(error => {
                console.log(error);
                throw(error);
            });
    };
};

export const getPokemonAttacks = (pokemon) => {
    return (dispatch) => {
        dispatch(pokemonAttacksLoading());

        setTimeout(function ()  {
            return pokemonMovesPromise(pokemon)
                .then((moves) => {
                    let pokemonAttacks = []
                    moves.forEach((obj) => {
                        pokemonAttacks = [
                            ...pokemonAttacks,
                            obj.move
                        ]
                    })

                    dispatch(pokemonAttacksReceived(pokemonAttacks));})
                .catch(error => {
                    console.log(error);
                    dispatch(pokemonAttacksFailed());
                    throw(error);
                });
        }, 3000, pokemon);
    }
}

export const getSetPageSize = (pageSize) => {

}

const pokemonPromise = (pokemon, id) => {
    const imgPromise = pokemonImagePromise(pokemon);
    return imgPromise.then((image) => {
        return {
            id: id,
            name: pokemon.name,
            image: image,
            details: pokemon.url
        };
    });
}

const pokemonImagePromise = (pokemon) => {
    return axios.get(pokemon.url)
        .then(response => {
            return response.data.sprites.front_default;
        })
        .catch(error => {
            console.log(error);
            throw(error);
        });
}

const pokemonMovesPromise = (pokemon) => {
    return axios.get(pokemon.details)
        .then(response => {
            return response.data.moves.slice(0, 10)
        })
        .catch(error => {
            console.log(error);
            throw(error);
        });
}
