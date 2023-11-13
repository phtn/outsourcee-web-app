import { Header, HeaderGap } from '../header'
import { Container, Item, GridContainer } from './styled'
import { FeatureItemProps, FeatureProps } from './types'

const Features = ({ headerProps, features }: FeatureProps) => (
	<Container>
		<Header {...headerProps} />
		<HeaderGap />
		<GridContainer>
			{features.map((feature: FeatureItemProps) => (
				<Item
					key={feature.id}
					{...feature}
				/>
			))}
		</GridContainer>
	</Container>
)

export default Features
