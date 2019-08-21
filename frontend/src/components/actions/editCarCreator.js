import axios from './axios/axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';
import { stopEditing } from './EditingCreator';

export const editCar = (car) => (dispatch) => {
	dispatch(spinnerOn);
	axios()
		.put(`https://ottocar-backend.herokuapp.com/api/cars/${car.id}`, car)
		.then((response) => {
			dispatch({ type: types.EDIT_CAR_SUCCESS, payload: response.data });
			dispatch(spinnerOff);
			dispatch(stopEditing);
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			window.history.back();
			window.location.reload(true);
		});
};