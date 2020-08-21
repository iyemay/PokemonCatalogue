import React from "react";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { connect } from "react-redux";
import ModalAttacks from "../ModalAttacks/ModalAttacks";


const useStyles = makeStyles({
    root: {
        minWidth: 250,
    },
    media: {
        height: 150,
    },
});


const CardPokemon = (props) => {
    const classes = useStyles();
    const pokemon = props.pokemon;

    return (
        <div className="d-flex mt-5 mr-1">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media}  image={pokemon.image}
                               title={pokemon.name}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {pokemon.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                   <ModalAttacks pokemon={pokemon}/>
                </CardActions>
            </Card>
        </div>
    );
}

function findPokemonById(pokemonsList, pokemonName) {
    return pokemonsList.find(pokemon => pokemon.name === pokemonName);
}

function mapStateToProps(state, ownProps) {
    const pokemon = findPokemonById(state.pokemonsList, ownProps.pokemon);
    return {
        pokemon: pokemon
    };
}

export default connect(mapStateToProps)(CardPokemon);
