import { LandingContainer, LandingContent } from './styled'
import Hero from '../hero'
import Features from '../features'
import Highlight from '../highlight'
import MetricsBanner from '../metrics-banner'
import Reviews from '../reviews'
import Collage from '../collage'
import PostScript from '../postscript'
import Footer from '../footer'
import { features } from '../features/features-data'
import { MetricItemProps } from '../metrics-banner/types'
import { toast } from 'sonner'
import { useEffect } from 'react'

const metrics: MetricItemProps[] = [
	{ value: '500K', label: 'downloads' },
	{ value: '300K', label: 'active users' },
	{ value: '+100', label: 'services' },
	{ value: '20K', label: 'providers' },
]

const Landing = () => {
	const headerProps = { tag: 'discover', title: 'Top Features' }

	return (
		<LandingContainer>
			<LandingContent>
				<Hero />
				<Features
					headerProps={headerProps}
					features={features}
				/>

				<MetricsBanner metrics={metrics} />
				<Highlight />
				<Collage />
				<Reviews />
				<PostScript />
				<Footer />
			</LandingContent>
		</LandingContainer>
	)
}

export default Landing
