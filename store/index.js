import { createStore } from 'redux';
import homeReducer from './homeReducer';

const store = createStore(homeReducer);

export default store;
