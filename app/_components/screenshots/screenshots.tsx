import { motion } from 'framer-motion'
import { ColLeft, ColMid, ColRight, PhoneImage, ScreenShots } from './styled'

const ScreenshotModule = () => {
	return (
		<ScreenShots>
			<ColLeft>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.9, delay: 2.1, ease: 'easeInOut' }}>
					<PhoneImage
						className='h-[500px]'
						alt='phone'
						src={'/images/phone-ss.png'}
						width={400}
						height={400}
					/>
				</motion.div>
			</ColLeft>
			<ColMid>
				<motion.div
					initial={{ y: 25, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 2, ease: 'easeInOut' }}>
					<PhoneImage
						className='lg:rounded-[68px] rounded-[70px] h-[600px]'
						alt='phone'
						src={'/images/ss-center.png'}
						width={400}
						height={400}
					/>
				</motion.div>
			</ColMid>
			<ColRight>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.95, delay: 2.2, ease: 'easeInOut' }}>
					<PhoneImage
						className='h-[500px]'
						alt='phone'
						src={'/images/phone-ss.png'}
						width={400}
						height={400}
					/>
				</motion.div>
			</ColRight>
		</ScreenShots>
	)
}

export default ScreenshotModule
