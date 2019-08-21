import * as types from '../actions/actionTypes';

export default function cars(state = [], action) {
	switch (action.type) {
		case types.FETCH_SUCCESS:
			return action.payload;
		case types.DELETE_CAR_SUCCESS:
			return state.filter((car) => car.id !== action.payload);
		case types.ADD_CAR_SUCCESS:
			return state.concat(action.payload);
		case types.EDIT_CAR_SUCCESS:
			return state;
		default:
			return state;
    }
}
