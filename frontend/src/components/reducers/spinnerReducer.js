import * as types from '../actions/actionTypes';

export default function spinner(isOn = false, action) {
	switch (action.type) {
		case types.SPINNER_ON:
			return true;
		case types.SPINNER_OFF:
			return false;
		default:
			return isOn;
	}
}