import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, loggedIn, token, ...rest }) => {
	return <Route {...rest} render={(props) => (token ? <Component {...props} /> : <Redirect to='/login' />)} />;
};

export default PrivateRoute;