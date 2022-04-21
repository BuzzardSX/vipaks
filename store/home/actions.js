import { SET, SET_REPOSITORIES, SET_SUBSCRIPTIONS } from './actionTypes';

export const set = payload => ({ type: SET, payload });
export const setRepositories = payload => ({ type: SET_REPOSITORIES, payload });
export const setSubscriptions = payload => ({ type: SET_SUBSCRIPTIONS, payload });
