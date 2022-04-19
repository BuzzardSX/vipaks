import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button } from '@mui/material';
import { load } from '../store/home/thunks';

const userLogin = 'defunkt';

function Home() {
	const dispatch = useDispatch();

	dispatch(load(userLogin));

	const state = useSelector(state => state.home);

	return <>
		<Avatar src={state.avatarUrl} />
		<Button>Click me!</Button>
		<div>Some</div>
		<div>{state.avatarUrl}</div>
	</>;
}

export default Home;
