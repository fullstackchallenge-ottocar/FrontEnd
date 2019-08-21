import * as types from '../actions/actionTypes';

export default function editing(state = false, action) {
	switch (action.type) {
		case types.START_EDITING:
			return true;
		case types.DONE_EDITING:
			return false;
		default:
			return state;
	}
}