const initialState = {
	user: {
		avatar: null
	}
};

function setUser(state, payload) {
	return {
		...state,
		user: {
			...state.user,
			avatar: payload.avatar
		}
	};
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'set_user':
			return setUser(state, action.payload);
		default:
			return state;
	}
}

export default reducer;
