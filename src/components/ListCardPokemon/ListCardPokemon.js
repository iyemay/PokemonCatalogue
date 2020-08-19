import React, {Component} from "react";
import CardPokemon from "../CardPokemon/CardPokemon";

class ListCardPokemon extends Component {
    render() {
        return (
            <div className="d-flex justify-content-around card-group">
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
            </div>
        );
    }
}

export default ListCardPokemon;