import axios from './axios/axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const addCar = (car, event) => (dispatch) => {
	event.preventDefault();
	dispatch(spinnerOn);
	axios()
		.post('https://ottocar-backend.herokuapp.com/api/cars', car)
		.then((res) => {
			dispatch({ type: types.ADD_CAR_SUCCESS, payload: res.data });
			window.location.reload(true);
			dispatch(spinnerOff);
		})
		.catch((err) => {
			localStorage.setItem('error', err);
			console.log(err);
		});
};