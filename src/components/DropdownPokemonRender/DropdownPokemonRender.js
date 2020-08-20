import React, {Component} from "react";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { connect } from "react-redux";
import { setPageSizeAction } from "../../actions/actions";

class DropdownPokemonRender extends Component {

    handleChange = (event) => {
        this.props.setPageSizeAction(event.target.value);
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <FormControl>
                    <InputLabel htmlFor="demo-customized-select-native" />
                    <NativeSelect onChange={this.handleChange}
                        id="demo-customized-select-native">
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                        <option value={50}>50</option>
                        <option value={60}>60</option>
                        <option value={70}>70</option>
                        <option value={80}>80</option>
                        <option value={90}>90</option>
                        <option value={100}>100</option>
                    </NativeSelect>
                </FormControl>
            </div>
        );
    }

}

const mapDispatchToProps = { setPageSizeAction };
export default (connect)(null, mapDispatchToProps)(DropdownPokemonRender);