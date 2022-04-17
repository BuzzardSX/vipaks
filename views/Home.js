import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
	const dispatch = useDispatch();

	const user = useSelector(state => state.user);

	return <>
		<div>User:</div>
		<div>{user}</div>
	</>;
}

export default Home;
