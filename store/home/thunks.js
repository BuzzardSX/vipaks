import { set, setRepositories } from './actions';

export const load = (login) => async (dispatch) => {
	const resp = await fetch(`https://api.github.com/users/${login}`);
	const json = await resp.json();

	dispatch(set({
		avatarUrl: json.avatar_url,
		login: json.login,
		profileUrl: json.html_url
	}));
}

export const loadRepositories = (login) => async (dispatch) => {
	const resp = await fetch(`https://api.github.com/users/${login}/repos`);
	const json = await resp.json();
	console.log(json);

	// dispatch(set({
	// 	avatarUrl: json.avatar_url,
	// 	login: json.login,
	// 	profileUrl: json.html_url
	// }));
}
