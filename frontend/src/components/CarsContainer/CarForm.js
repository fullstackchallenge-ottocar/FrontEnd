import React from 'react';
import {
  StyledAddCarForm,
  StyledLabel,
  StyledTH2
} from '../StyledComponents/StyledAddCarForm';
import { StyledInput } from '../StyledComponents/StyledInput';
import { StyledSelect } from '../StyledComponents/StyledSelect';
import { StyledButton } from '../StyledComponents/StyledButton';

export default class CarForm extends React.Component {
  state = {
    make: '',
    model: '',
    year: '',
    active: ''
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <StyledAddCarForm>
        <StyledTH2>Add a new car</StyledTH2>
        <StyledLabel>Make: </StyledLabel>
        <StyledInput
          placeholder='Make'
          type='text'
          name='make'
          value={this.state.make}
          onChange={this.onChangeHandler}
        />
        <StyledLabel>Model: </StyledLabel>
        <StyledInput
          placeholder='Model'
          type='text'
          name='model'
          value={this.state.model}
          onChange={this.onChangeHandler}
        />
        <StyledLabel>Year: </StyledLabel>
        <StyledInput
          placeholder='Year'
          type='text'
          name='year'
          value={this.state.year}
          onChange={this.onChangeHandler}
        />
        <StyledLabel>Active or inactive: </StyledLabel>
        <StyledSelect name='active' onClick={this.onChangeHandler}>
          <option value='1'>active</option>
          <option value='0'>inactive</option>
        </StyledSelect>

        <StyledButton
          onClick={event =>
            this.props.addCar(
              {
                make: this.state.make,
                model: this.state.model,
                year: this.state.year,
                active: this.state.active
              },
              event
            )
          }
        >
          Add Car
        </StyledButton>
      </StyledAddCarForm>
    );
  }
}
