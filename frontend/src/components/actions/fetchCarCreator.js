import axios from './axios/axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const fetchCars = () => (dispatch) => {
	dispatch(spinnerOn);
	axios()
		.get(`https://ottocar-backend.herokuapp.com/api/cars`)
		.then((res) => {
			dispatch({ type: types.FETCH_SUCCESS, payload: res.data });
			dispatch(spinnerOff);
		})
		.catch((err) => {
			console.log(err);
		});
};