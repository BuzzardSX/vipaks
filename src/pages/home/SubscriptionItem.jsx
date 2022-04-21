import { Link } from '@mui/material';

export default function SubscriptionItem(props) {
	const { value } = props;
	return (
		<>
			<Link href={value.profileUrl}>{value.login}</Link>
		</>
	);
}
