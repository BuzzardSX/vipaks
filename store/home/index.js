import { SET, SET_REPOSITORIES, SET_SUBSCRIPTIONS } from './actionTypes';

const initialState = {
	avatarUrl: null,
	login: null,
	profileUrl: null,
	creationDate: null,
	repositories: [],
	subscriptions: []
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

function setSubscriptions(state, payload) {
	return {
		...state,
		subscriptions: payload
	};
}

function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET:
			return set(state, payload);
		case SET_REPOSITORIES:
			return setRepositories(state, payload);
		case SET_SUBSCRIPTIONS:
			return setSubscriptions(state, payload);
		default:
			return state;
	}
}

export default reducer;
