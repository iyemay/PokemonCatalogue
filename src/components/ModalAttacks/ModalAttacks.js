import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {getPokemonAttacks} from "../../actions/actions";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const ModalAttacks = (props) => {

    const pokemon = props.pokemon;
    const attacks = props.attacks;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
        props.getPokemonAttacks(pokemon);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Button variant="contained" color="secondary" onClick={handleOpen}>
                See More
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>

                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <img src={pokemon.image} alt={pokemon.name}/>
                            <h2>{pokemon.name}</h2>
                        </div>
                        <div>
                            <p className="mb-0">Attacks</p>
                            <hr className="m-0 mb-2"/>
                            <div className="d-flex flex-wrap justify-content-md-around">
                                {attacks.map((attack, i) => (
                                    <span className="badge badge-info mt-1 mx-1" key={i}>{attack.name}</span>
                                ))
                                }
                            </div>

                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}


const mapStateToProps = (state) => ({attacks: state.currentPokemonAttacks});
const mapDispatchToProps =  { getPokemonAttacks };
export default (connect)(mapStateToProps, mapDispatchToProps)(ModalAttacks);
