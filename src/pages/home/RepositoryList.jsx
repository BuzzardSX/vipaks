import { Grid } from '@mui/material';
import RepositoryItem from './RepositoryItem';

export default function RepositoryList(props) {
	return (
		<Grid container columns={2} spacing={2}>
			{props.values.map((value, index) => (
				<Grid item xs={1}>
					<RepositoryItem value={value} key={index} />
				</Grid>
			))}
		</Grid>
	);
}
