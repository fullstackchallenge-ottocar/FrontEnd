import { combineReducers } from 'redux';
import login from './loginReducer';
import spinner from './spinnerReducer';
import cars from './carReducer';
import editing from './editingReducer';

const rootReducer = combineReducers({
	login,
	spinner,
	cars,
	editing
});

export default rootReducer;