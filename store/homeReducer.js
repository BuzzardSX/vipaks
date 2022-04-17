const initialState = {
	avatar: null
};

function homeReducer(state = initialState, action) {
	switch (action.type) {
		case 'home/set_user':
			return state;
		default:
			return state;
	}
}

