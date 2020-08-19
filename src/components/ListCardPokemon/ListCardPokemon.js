import React, {Component} from "react";
import CardPokemon from "../CardPokemon/CardPokemon";
import { connect } from 'react-redux';

class ListCardPokemon extends Component {
    render() {
        if(this.props.pokemonsList.length) {
            return (
                <div className="d-flex justify-content-around card-group mt-3">
                    {this.props.pokemonsList.map(pokemon => {
                        return (
                            <CardPokemon key={pokemon.name} pokemon={pokemon.name}/>
                        );
                    })}
                </div>
            );
        } else {
            return (
                <div className="d-flex justify-content-center mt-5">
                    <h5>Pokemons List Empty</h5>
                </div>
            );

        }

    }
}

const mapStateToProps = (state) => ({ pokemonsList: state.pokemonsList });

export default connect(mapStateToProps)(ListCardPokemon);