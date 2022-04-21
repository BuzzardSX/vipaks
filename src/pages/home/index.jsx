import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Grid, Link, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import RepositoryList from './RepositoryList';
import SubscriptionList from './SubscriptionList';
import { load, loadRepositories, loadSubscriptions } from '../../../store/home/thunks';

const userLogin = 'BuzzardSX';

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(load(userLogin));
		dispatch(loadRepositories(userLogin));
		dispatch(loadSubscriptions(userLogin));
	}, []);

	const state = useSelector(state => state.home);

	const [activeTab, setTab] = useState('repositories');

	function handleTabChange(e, value) {
		setTab(value);
	}

	return (
		<Grid container spacing={4}>
			<Grid item xs={3}>
				<Avatar src={state.avatarUrl} sx={{ width: 'auto', height: 'auto' }} />
				<Link href={state.profileUrl}>@{state.login}</Link>
				<Typography>Created at {state.creationDate?.toLocaleDateString()}</Typography>
			</Grid>
			<Grid item xs={9}>
				<TabContext value={activeTab}>
					<TabList onChange={handleTabChange}>
						<Tab label="Repositories" value="repositories" />
						<Tab label="Subscriptions" value="subscriptions" />
					</TabList>
					<TabPanel value="repositories">
						<RepositoryList values={state.repositories} />
					</TabPanel>
					<TabPanel value="subscriptions">
						<SubscriptionList values={state.subscriptions} />
					</TabPanel>
				</TabContext>
			</Grid>
		</Grid>
	);
}
