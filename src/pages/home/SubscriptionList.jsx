import SubscriptionItem from './SubscriptionItem';

export default function SubscriptionList(props) {
	const { values } = props;
	return <div>
		{values.map(value => (
			<SubscriptionItem value={value} />
		))}
	</div>;
}
