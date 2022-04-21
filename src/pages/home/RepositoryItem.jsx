import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';

export default function RepositoryItem(props) {
	const { value } = props;

	function handleCloneClick() {
		navigator.clipboard.writeText(value.cloneUrl);
	}

	return (
		<Card variant="outlined">
			<CardContent>
				<Typography variant="subtitle1">{value.name}</Typography>
				<div>Created at {value.createdAt.toLocaleDateString()}</div>
				<IconButton onClick={handleCloneClick}>
					<ContentCopy />
				</IconButton>
			</CardContent>
		</Card>
	);
}
