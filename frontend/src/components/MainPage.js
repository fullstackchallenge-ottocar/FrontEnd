import React from 'react';
import { Route } from 'react-router-dom';
import {
  StyledNavbar,
  StyledH1,
  StyledLinks,
  StyledNavLink,
  StyledLogout
} from './StyledComponents/StyledNavbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cars from './CarsContainer/Cars';
import { addCar } from '../components/actions/addCarCreator';
import { editCar } from '../components/actions/editCarCreator';
import CarForm from '../components/CarsContainer/CarForm';
import CarEditForm from '../components/CarsContainer/CarEditForm';
import { stopEditing } from '../components/actions/EditingCreator';

class MainPage extends React.Component {
  handleLogout = () => {
    localStorage.clear();
    window.location.reload(true);
  };
  render() {
    return (
      <div>
        <StyledNavbar>
          <StyledH1>Otto Car</StyledH1>
          <StyledLinks>
            <StyledNavLink to='/home'>HOME</StyledNavLink>
            <StyledNavLink to='/stats'>STATISTICS</StyledNavLink>
            <StyledNavLink to='/add-car'>ADD CAR</StyledNavLink>
            <StyledLogout type='submit' onClick={() => this.handleLogout()}>
              LOGOUT
            </StyledLogout>
          </StyledLinks>
        </StyledNavbar>

        <Route exact path='/add-car' render={(props) => <CarForm {...props} addCar={this.props.addCar} />} />
        <Route exact path='/home' />
        
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addCar,
      editCar,
      stopEditing
    },
    dispatch
  );
}

function mapStateToProps({ cars }) {
  return {
    cars
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
