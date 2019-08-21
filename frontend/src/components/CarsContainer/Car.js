import React from 'react';
import {
  StyledCar,
  StyledTitle,
  StyledSubTitle
} from '../StyledComponents/StyledCar';
import { StyledCarB } from '../StyledComponents/StyledCarB';
import { Redirect } from 'react-router-dom';
import { startEditing } from '../actions/EditingCreator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Car extends React.Component {
  state = {
    id: this.props.car.id
  };
  render() {
    if (this.props.isEditing) {
      return <Redirect to={`/edit${this.state.id}`} />;
    }
    return (
      <StyledCar>
        <div>
          <StyledTitle>
            <p>Car make:{this.props.car.make}</p>
          </StyledTitle>
          <StyledSubTitle>
            <p>Make: {this.props.car.model} </p>
          </StyledSubTitle>
          <StyledSubTitle>
            <p>Year: {this.props.car.year} </p>
          </StyledSubTitle>
          <StyledSubTitle>
            <p>Active: {this.props.car.active} </p>
          </StyledSubTitle>
        </div>
        <StyledCarB
          type='submit'
          onClick={() => this.props.deleteCar(this.props.car.id)}
        >
          Delete this car
        </StyledCarB>
        <StyledCarB onClick={() => this.props.startEditing()}>Edit</StyledCarB>
      </StyledCar>
    );
  }
}

function mapStateToProps(state) {
  return {
    isEditing: state.editing
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      startEditing
    },
    dispatch
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Car)
);
