import Link from 'next/link'
import {
	FooterContent,
	FooterItem,
	Headline,
	HeroContainer,
	HeroContent,
	HeroPrimary,
	HeroSecondary,
	PrimaryContent,
	StoreContainer,
	StoreItem,
	Subtext,
	WaveOne,
} from './styled'
import ImageSlider from './Slider/image-slider'

const HeroTwo = () => (
	<HeroContainer>
		<HeroContent>
			<Primary />
			<Secondary />
		</HeroContent>
		<Footer />
	</HeroContainer>
)

const Primary = () => (
	<HeroPrimary>
		<PrimaryContent>
			<Headline headline='Simplify your workload.' />
			<Subtext
				subtext='Experience the newest way to delegate. The ultimate app to shop
							all kinds of services, provided by select skilled and verified
							professionals.'
			/>
			<DownloadStore />
		</PrimaryContent>
	</HeroPrimary>
)

const Secondary = () => (
	<HeroSecondary>
		<ImageSlider />
	</HeroSecondary>
)

const Footer = () => (
	<WaveOne>
		<FooterContent>
			<Link href={'/'}>
				<FooterItem>Privacy Policy</FooterItem>
			</Link>
		</FooterContent>
	</WaveOne>
)

type LinkType = {
	title: string
	image: string
	link: string
}

const stores: LinkType[] = [
	{
		title: 'app-store',
		image: `/images/app-store-v4.png`,
		link: '/',
	},
	{
		title: 'play-store',
		image: `/images/play-store-v4.png`,
		link: '/',
	},
	{
		title: 'app-gallery',
		image: `/images/app-gallery-v4.png`,
		link: '/',
	},
]

const DownloadStore = () => (
	<StoreContainer>
		{stores.map((item) => (
			<Link
				key={item.link}
				href={item.link}>
				<StoreItem
					alt=''
					src={item.image}
					height={300}
					width={400}
				/>
			</Link>
		))}
	</StoreContainer>
)

export { HeroTwo }
