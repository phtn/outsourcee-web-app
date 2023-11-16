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
	Subtext,
	WaveOne,
} from './styled'
import ImageSlider from './Slider/image-slider'
import { motion } from 'framer-motion'
import { headlines } from './headline-data'
import { useCallback, useEffect, useState } from 'react'
import { getNextElement } from '@/app/_utils/helpers'
import { easeInOut } from 'popmotion'
import DownloadLinks from '../download-links'

const Hero = () => (
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
		return () => {
			clearTimeout(timeout)
		}
	}, [index, count, headlines])

	const Headline = useCallback(
		() => <HeadlineContent headline={headlines[index].headline} />,
		[index, headlines]
	)

	return (
		<HeroPrimary>
			<motion.div
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
					<DownloadLinks />
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
					<FooterItem></FooterItem>
				</Link>
			</FooterContent>
		</WaveOne>
	</motion.div>
)

export default Hero
