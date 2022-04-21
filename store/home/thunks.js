import { set, setRepositories } from './actions';

export const load = (login) => async (dispatch) => {
	const resp = await fetch(`https://api.github.com/users/${login}`);
	const json = await resp.json();

	dispatch(set({
		avatarUrl: json.avatar_url,
		login: json.login,
		profileUrl: json.html_url,
		creationDate: new Date(json.created_at)
	}));
}

export const loadRepositories = (login) => async (dispatch) => {
	const resp = await fetch(`https://api.github.com/users/${login}/repos`);
	const json = await resp.json();

	const payload = json.map(i => ({
		name: i.name,
		description: i.description,
		language: i.language,
		createdAt: i.created_at,
		cloneUrl: i.clone_url
	}));

	dispatch(setRepositories(payload));
}
