import { SET_USER } from './actionTypes';

const initialState = {
	avatarUrl: null,
	profileUrl: null
};

function setUser(state, payload) {
	return {
		...state,
		...payload
	};
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return setUser(state, action.payload);
		default:
			return state;
	}
}

export default reducer;
