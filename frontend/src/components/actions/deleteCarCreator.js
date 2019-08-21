import axios from './axios/axios';
import * as types from '../actions/actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const deleteCar = (id) => (dispatch) => {
	dispatch(spinnerOn);
	axios().delete(`https://ottocar-backend.herokuapp.com/api/cars/${id}`).then((res) => {
		dispatch({ type: types.DELETE_CAR_SUCCESS, payload: res.data.id });
		window.location.reload(true);
		dispatch(spinnerOff);
	});
};