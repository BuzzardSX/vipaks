import { SET, SET_REPOSITORIES } from './actionTypes';

const initialState = {
	avatarUrl: null,
	login: null,
	profileUrl: null,
	creationDate: null,
	repositories: []
};

function set(state, payload) {
	return {
		...state,
		...payload
	};
}

function setRepositories(state, payload) {
	return {
		...state,
		repositories: payload
	};
}

function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET:
			return set(state, payload);
		case SET_REPOSITORIES:
			return setRepositories(state, payload)
		default:
			return state;
	}
}

export default reducer;
