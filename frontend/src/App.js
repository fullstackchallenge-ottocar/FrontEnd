import React, { Component } from 'react';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { login } from './components/actions/loginCreator';
import { signUp } from './components/actions/signUp';
import { spinnerOn, spinnerOff } from './components/actions/spinner';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import MainPage from './components/MainPage';

class App extends Component {
  state = {
    token: localStorage.getItem('token')
  };
  render() {
    if (this.props.spinner) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Route
          exact
          path='/login'
          render={props => (
            <Login
              {...props}
              login={this.props.login}
              token={this.state.token}
            />
          )}
        />
        <Route
          exact
          path='/sign-up'
          render={props => <SignUp {...props} signUp={this.props.signUp} />}
        />
        <PrivateRoute path='/home' component={MainPage} token={this.state.token} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn,
    token: state.login.token,
    spinner: state.spinner
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      login,
      signUp,
      spinnerOff,
      spinnerOn
    },
    dispatch
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
