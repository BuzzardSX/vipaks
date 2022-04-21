import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Tab, Tabs } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import RepositoryList from './RepositoryList';
import { load, loadRepositories } from '../../../store/home/thunks';

const userLogin = 'BuzzardSX';

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(load(userLogin));
		dispatch(loadRepositories(userLogin));
	}, []);

	const state = useSelector(state => state.home);

	const value = 'repositories';
	return <>
		<Avatar src={state.avatarUrl} sx={{ width: 400, height: 400 }} />
		<div>{state.login}</div>
		<div>{state.creationDate?.toString()}</div>
		<TabContext value={value}>
			<TabList>
				<Tab label="Repositories" />
			</TabList>
			<TabPanel value="repositories" index={0}>
				<RepositoryList values={state.repositories} />
			</TabPanel>
		</TabContext>
	</>;
}
