import { combineReducers } from 'redux';
import login from './loginReducer';
import spinner from './spinnerReducer';

const rootReducer = combineReducers({
	login,
	spinner
});

export default rootReducer;