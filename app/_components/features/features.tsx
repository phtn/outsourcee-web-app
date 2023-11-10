import Image from 'next/image'
import {
	FeatureHeader,
	FeaturesContainer,
	FeatureItem,
	FeatureHeaderGap,
	FeatureGridContainer,
} from './styled'
import { features } from './features-data'
import { FeatureItemProps, FeatureProps } from './types'

const Features = ({ headerProps, features }: FeatureProps) => (
	<FeaturesContainer>
		<FeatureHeader
			{...headerProps}
			tag='discover'
			title='Top Features'
		/>

		<FeatureHeaderGap />
		<FeatureGridContainer>
			{features.map((feature: FeatureItemProps) => (
				<FeatureItem
					key={feature.id}
					{...feature}
				/>
			))}
		</FeatureGridContainer>
	</FeaturesContainer>
)

export default Features
