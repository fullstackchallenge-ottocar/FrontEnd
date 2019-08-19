import * as types from './actionTypes';
export function spinnerOn() {
	return {
		type: types.SPINNER_ON
	};
}

export function spinnerOff() {
	return {
		type: types.SPINNER_OFF
	};
}