import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_DETAILS = 'GET_POKEMON_DETAILS';
const apiUrl = 'https://pokeapi.co/api/v2';

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
                    dispatch({
                        type: GET_POKEMONS,
                        pokemons: pokemons
                    });
                });
            })
            .catch(error => {
                console.log(error);
                throw(error);
            });
    };
};

const pokemonPromise = (pokemon, id) => {
    const imgPromise = pokemonImagePromise(pokemon);
    return imgPromise.then((image) => {
        return {
            id: id,
            name: pokemon.name,
            image: image
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