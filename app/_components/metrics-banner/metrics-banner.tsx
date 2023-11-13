import { Cell, Container, Item, Label, Value } from './styled'
import { MetricBannerProps, MetricItemProps } from './types'

const MetricsBanner = ({ metrics }: MetricBannerProps) => (
	<Container>
		{metrics.map((item) => (
			<Cell key={item.value}>
				<MetricItem
					value={item.value}
					label={item.label}
				/>
			</Cell>
		))}
	</Container>
)

const MetricItem = ({ value, label }: MetricItemProps) => (
	<Item>
		<Value>{value}</Value>
		<Label>{label}</Label>
	</Item>
)

export default MetricsBanner
