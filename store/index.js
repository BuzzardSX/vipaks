import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
import homeReducer from './home';

const rootReducer = combineReducers({
	home: homeReducer
});

const composedEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, composedEnhancer);

export default store;
