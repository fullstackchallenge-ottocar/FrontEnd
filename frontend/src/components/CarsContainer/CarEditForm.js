import React from 'react';
import { StyledAddCarForm, StyledLabel, StyledTH2 } from '../StyledComponents/StyledAddCarForm';
import { StyledSelect } from '../StyledComponents/StyledSelect';
import { StyledButton } from '../StyledComponents/StyledButton';
import { StyledInput } from '../StyledComponents/StyledInput';

export default class CarEditForm extends React.Component {
	state = {
		make: this.props.car.make,
        model: this.props.car.model,
        year: this.props.car.year,
        active: this.props.car.active
	};

	onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleChange = () => {
		this.props.editCar({
            make: this.state.make,
            model: this.state.model,
            year: this.state.year,
            active: this.state.active,
			id: this.props.id
		});
		this.props.stopEditing();
	};

	render() {
		return (
			<StyledAddCarForm>
				<StyledTH2>Car details</StyledTH2>
				<StyledLabel>Make: </StyledLabel>
				<StyledInput value={this.state.make} type="text" onChange={this.onChangeHandler} name="make" />
				<StyledLabel>Model: </StyledLabel>
				<StyledInput value={this.state.model} type="text" onChange={this.onChangeHandler} name="model" />
				<StyledLabel>year: </StyledLabel>
				<StyledInput value={this.state.year} type="text" onChange={this.onChangeHandler} name="year" />
				<StyledLabel>Active or Inactive: </StyledLabel>
				<StyledSelect onClick={this.onChangeHandler} name="active">
					<option default value="1">
						Active
					</option>
					<option value="0">Inactive</option>
				</StyledSelect>
				<StyledButton onClick={() => this.handleChange()}>Submit</StyledButton>
			</StyledAddCarForm>
		);
	}
}