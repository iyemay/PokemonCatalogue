import React, {Component} from "react";
import CardPokemon from "../CardPokemon/CardPokemon";
import { connect } from 'react-redux';
import { PENDING, FULLFILLED, FAILED } from "../../reducers/pokemonsReducer";

class ListCardPokemon extends Component {

    render(props) {
        const statePokemons = this.props.pokemonsRetrievalStatus;
        const pokemonsToShow = this.props.pokemonsList.slice(0,this.props.pageSize);

        if (statePokemons === PENDING) {
            return (
                <div className="d-flex flex-row mt-5 justify-content-around">
                    <div className="spinner-grow spinner-grow-sm text-info mr-2" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>

                    <div>
                        <p className="mb-0 mr-2 loading-message">Retrieving pokemons</p>
                    </div>

                    <div className="spinner-grow spinner-grow-sm text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>

                </div>
            );
        } else if (statePokemons === FULLFILLED) {
            return (
                <div className="d-flex flex-column flex-sm-row justify-content-sm-center
                                justify-content-md-around card-group mt-3">
                    {pokemonsToShow.map(pokemon => {
                        return (
                            <CardPokemon key={pokemon.name} pokemon={pokemon.name}/>
                        );
                    })}
                </div>
            );

        } else if (statePokemons === FAILED) {
            return (
                <div className="d-flex justify-content-center mt-5">
                    <i className="fa fa-exclamation-circle" />
                    <p className="ml-2 mb-0">Error retrieving pokemons</p>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    pokemonsList: state.pokemonsList,
    pageSize: state.pageSize,
    pokemonsRetrievalStatus: state.pokemonsRetrievalStatus
});

export default (connect)(mapStateToProps)(ListCardPokemon);