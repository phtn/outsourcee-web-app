import Link from 'next/link'
import {
	FooterContent,
	FooterItem,
	HeadlineContent,
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
import { motion, stagger, useAnimate, useTime } from 'framer-motion'
import { headlines } from './headline-data'
import { useCallback, useEffect, useState } from 'react'
import { getNextElement } from '@/app/_utils/helpers'
import { easeInOut } from 'popmotion'

const HeroTwo = () => (
	<HeroContainer>
		<HeroContent>
			<Primary />
			<Secondary />
		</HeroContent>
		<Footer />
	</HeroContainer>
)

const Primary = () => {
	const [index, setIndex] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			getNextElement(headlines, index, setIndex)
			setCount((prev) => prev + 1)
		}, 7000)
		console.log(count)
		return () => {
			clearTimeout(timeout)
		}
	}, [index, count])

	const Headline = useCallback(
		() => <HeadlineContent headline={headlines[index].headline} />,
		[index, headlines]
	)

	return (
		<HeroPrimary>
			<motion.div
				// className='z-20 flex'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.7, delay: 1.6, ease: 'easeInOut' }}>
				<PrimaryContent>
					<motion.div
						key={index}
						initial={{ x: 10, opacity: 0, scaleX: 0.97 }}
						animate={{ x: 0, opacity: 1, scaleX: 1 }}
						transition={{
							duration: 0.55,
							ease: 'easeInOut',
							easings: easeInOut,
						}}
						exit={{ y: -15, opacity: 0, scaleX: 0.95 }}>
						<Headline />
					</motion.div>
					<motion.div
						className='z-20 flex'
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 1.8, ease: 'easeInOut' }}>
						<Subtext
							subtext='Experience the newest way to delegate. The ultimate app to shop
							all kinds of services, provided by select skilled and verified
							professionals.'
						/>
					</motion.div>
					<DownloadStore />
				</PrimaryContent>
			</motion.div>
		</HeroPrimary>
	)
}

const Secondary = () => (
	<motion.div
		initial={{ opacity: 0, y: 100 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.7, delay: 2.4, ease: 'easeInOut' }}>
		<HeroSecondary>
			<ImageSlider />
		</HeroSecondary>
	</motion.div>
)

const Footer = () => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.8, delay: 1 }}>
		<WaveOne>
			<FooterContent>
				<Link href={'/'}>
					<FooterItem>Terms of Use | Privacy Policy</FooterItem>
				</Link>
			</FooterContent>
		</WaveOne>
	</motion.div>
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
		link: '/app-store',
	},
	{
		title: 'play-store',
		image: `/images/play-store-v4.png`,
		link: '/play-store',
	},
	{
		title: 'app-gallery',
		image: `/images/app-gallery-v4.png`,
		link: '/app-gallery',
	},
]

const DownloadStore = () => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.2, delay: 2.0 }}>
		<StoreContainer>
			{stores.map((item, index) => (
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
	</motion.div>
)

export { HeroTwo }
