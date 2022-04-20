import { default as React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load, loadRepositories } from '../store/home/thunks';

const userLogin = 'defunkt';

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(load(userLogin));
		dispatch(loadRepositories(userLogin));
	}, []);

	const state = useSelector(state => state.home);

	return <>
		<button>but</button>
	</>;
}

export default Home;
