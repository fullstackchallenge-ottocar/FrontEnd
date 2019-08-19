import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as types from './components/actions/actionTypes';
import rootReducer from './components/reducers/index';
import { BrowserRouter as Router } from 'react-router-dom';

const customMiddlewareToSaveUserToken = (store) => (next) => (action) => {
	console.log(store);
	if (action.type === types.LOGIN_SUCCESS) {
		localStorage.setItem('token', action.payload);
	}
	next(action);
};

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, logger, customMiddlewareToSaveUserToken),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);