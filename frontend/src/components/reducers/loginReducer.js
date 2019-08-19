import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export default function login(state = initialState, action) {
	switch (action.type) {
		case types.LOGIN_SUCCESS:
			return {
				...state,
				loggedIn: true,
				token: action.payload
			};
		default:
			return state;
	}
}