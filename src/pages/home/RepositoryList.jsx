import RepositoryItem from './RepositoryItem';

export default function RepositoryList(props) {
	return (
		<div>
			{props.values.map(value => <RepositoryItem value={value} />)}
		</div>
	);
}
