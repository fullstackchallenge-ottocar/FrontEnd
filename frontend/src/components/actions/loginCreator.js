import axios from 'axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const login = (user) => (dispatch) => {
	let data = JSON.stringify({
		username: user.username,
		password: user.password
	});
	dispatch(spinnerOn);
	axios({
		method: 'POST',
		url: 'http://localhost:4100/api/auth/login',
		data,
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((res) => {
		dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
		window.location.reload(true);
		dispatch(spinnerOff);
	});
};