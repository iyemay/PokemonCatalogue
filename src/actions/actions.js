import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
const apiUrl = 'https://pokeapi.co/api/v2';

export const getPokemons = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/pokemon?offset=0&limit=100`)
            .then(response => {
                dispatch({type: GET_POKEMONS, pokemons: response.data.results})
            })
            .catch(error => {
                console.log(error);
                throw(error);
            });
    };
};