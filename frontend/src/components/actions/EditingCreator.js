import * as types from './actionTypes';

export const startEditing = () => (dispatch) => {
	dispatch({ type: types.START_EDITING });
};
export const stopEditing = () => (dispatch) => {
	dispatch({ type: types.DONE_EDITING });
};