import { set } from './actions';

export const load = (login) => async (dispatch) => {
	const resp = await fetch(`https://api.github.com/users/${login}`);
	const { avatar_url, html_url } = await resp.json();

	dispatch(set({
		avatarUrl: avatar_url,
		profileUrl: html_url
	}));
}
