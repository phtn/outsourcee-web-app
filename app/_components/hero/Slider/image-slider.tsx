import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { images } from './image-data'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon, DotIcon } from 'lucide-react'
import { SliderContainer } from './styled'

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 100 : -100,
			opacity: 0,
		}
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 100 : -100,
			scale: 0.5,
			opacity: 0,
		}
	},
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity
}

const ImageSlider = () => {
	const [[page, direction], setPage] = useState([0, 0])

	// We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
	// then wrap that within 0-2 to find our image ID in the array below. By passing an
	// absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
	// detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
	const imageIndex = wrap(0, images.length, page)

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection])
	}

	return (
		<SliderContainer>
			<AnimatePresence
				initial={false}
				custom={direction}>
				<motion.img
					className='xl:h-[600px] xl:rounded-[54px] lg:h-[500px] lg:rounded-[42px] h-[450px] md:rounded-[38px] z-30 bg-transparent/50 dark:bg-primary-foreground/100 transition-shadow shadow-xl group-hover:shadow-[0_28px_42px_-15px_rgba(0,0,0,0.5)] group-hover:absolute '
					key={page}
					src={images[imageIndex].image}
					custom={direction}
					variants={variants}
					initial='enter'
					animate='center'
					exit='exit'
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					drag='x'
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x)

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1)
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1)
						}
					}}
				/>
			</AnimatePresence>
			{/* <div className='flex flex-col xl:h-[350px] lg:h-[275px] py-2 items-stretch w-full justify-end px-0 md:px-6 xl:px-20'>
				<div className='flex items-center justify-between'>
					<Button
						className='z-20 skew-x-[-16deg] rounded-sm'
						onClick={() => paginate(1)}
						size='icon'>
						<div className='skew-x-[16deg]'>
							<ChevronLeftIcon />
						</div>
					</Button>
					<div className='flex flex-col items-center justify-center h-14 bg-gradient-to-r from-black/60 border-l-8 border-secondary-foreground to-black/30 backdrop-blur-md z-20 w-[240px] md:w-[320px] skew-x-[-16deg] mx-3 md:mx-0'>
						<div className='flex items-center justify-center'>
							<span className='z-20 font-bold text-lg tracking-wider'>
								{images[imageIndex].name}
							</span>
							<DotIcon />
							<span className='z-20 text-secondary-foreground font-bold'>
								{images[imageIndex].stars}
							</span>
						</div>

						<div className='bg-black/50 w-full flex h-full items-center justify-center'>
							<span className='z-20 font-medium tracking-widest text-center text-xs uppercase text-primary-foreground'>
								{images[imageIndex].serviceType}
							</span>
						</div>
					</div>
					<Button
						onClick={() => paginate(-1)}
						size='icon'
						className='z-20 skew-x-[-16deg] rounded-sm'>
						<div className='skew-x-[16deg]'>
							<ChevronRightIcon />
						</div>
					</Button>
				</div>
			</div> */}
		</SliderContainer>
	)
}

export default ImageSlider
