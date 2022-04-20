import { SET, SET_REPOSITORIES } from './actionTypes';

export const set = payload => ({ type: SET, payload });
export const setRepositories = payload => ({ type: SET_REPOSITORIES, payload });
