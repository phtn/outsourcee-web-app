import { motion } from 'framer-motion'
import { ColLeft, ColMid, ColRight, PhoneImage, ScreenShots } from './styled'

const ScreenshotModule = () => {
	return (
		<ScreenShots>
			<ColLeft>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 2.1, ease: 'easeInOut' }}>
					<PhoneImage
						alt='phone'
						src={'/images/phone-ss.png'}
						width={200}
						height={200}
					/>
				</motion.div>
			</ColLeft>
			<ColMid>
				<motion.div
					initial={{ y: 15, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 2, ease: 'easeInOut' }}>
					<PhoneImage
						className='lg:rounded-[68px]'
						alt='phone'
						src={'/images/phone-ss.png'}
						width={350}
						height={350}
					/>
				</motion.div>
			</ColMid>
			<ColRight>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 2.2, ease: 'easeInOut' }}>
					<PhoneImage
						alt='phone'
						src={'/images/phone-ss.png'}
						width={200}
						height={200}
					/>
				</motion.div>
			</ColRight>
		</ScreenShots>
	)
}

export default ScreenshotModule
