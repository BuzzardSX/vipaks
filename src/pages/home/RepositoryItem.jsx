import { Card, CardContent, Typography } from '@mui/material';

export default function RepositoryItem(props) {
	const { value } = props;
	return <>
		<Card>
			<CardContent>
				<Typography variant="subtitle1">{value.name}</Typography>
			</CardContent>
		</Card>
	</>;
}
