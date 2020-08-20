import React, {Component} from "react";
import CardPokemon from "../CardPokemon/CardPokemon";
import { connect } from 'react-redux';

class ListCardPokemon extends Component {

    render() {
        const pokemonsToShow = this.props.pokemonsList.slice(0,this.props.pageSize);
        if(pokemonsToShow.length) {
            return (
                <div className="d-flex justify-content-around card-group mt-3">
                    {pokemonsToShow.map(pokemon => {
                        return (
                            <CardPokemon key={pokemon.name} pokemon={pokemon.name}/>
                        );
                    })}
                </div>
            );
        } else {
            return (
                <div className="d-flex justify-content-center mt-5">
                    <h5>Loading Pokémon Catalogue...</h5>
                </div>
            );

        }

    }
}

const mapStateToProps = (state) => ({
    pokemonsList: state.pokemonsList,
    pageSize: state.pageSize});

export default connect(mapStateToProps)(ListCardPokemon);