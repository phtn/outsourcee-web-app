'use client'

import useDimensions from '@/app/_utils/hooks/useDimensions'
import useToggleMode from '@/app/_utils/hooks/useToggleMode'
import { useAnimation, motion } from 'framer-motion'
import {
	MutableRefObject,
	useRef,
	useEffect,
	useLayoutEffect,
	useState,
	useCallback,
} from 'react'
import tw from 'tailwind-styled-components'

type OriginOffset = {
	top: number
	left: number
}

type GridItemProps = {
	delayPerPixel: number
	i: number
	originIndex: number
	originOffset: MutableRefObject<OriginOffset>
}

const gridClass = `
	bg-gradient-to-b from-background to-primary-foreground 
	grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 
	gap-[0.5px] h-screen overflow-hidden
	`
// xl:h-[240vh] lg:h-[220vh] md:h-[218vh]

export function Grid() {
	const { cells } = useDimensions()
	const [length, setLength] = useState(cells)
	const delayPerPixel = 0.0008
	const originOffset = useRef({ top: 0, left: 0 })
	const controls = useAnimation()
	const { checked } = useToggleMode()

	useEffect(() => {
		controls.start('visible')
	}, [checked])

	useEffect(() => {
		setLength(cells)
	}, [cells])

	return (
		<motion.div
			className={gridClass}
			initial='hidden'
			animate={controls}
			variants={{}}>
			{Array.from({ length: 100 }).map((_, i) => (
				<GridItem
					key={i}
					i={i}
					originIndex={32}
					delayPerPixel={delayPerPixel}
					originOffset={originOffset}
				/>
			))}
		</motion.div>
	)
}

function GridItem({
	delayPerPixel,
	i,
	originIndex,
	originOffset,
}: GridItemProps) {
	const delayRef = useRef(0)
	const offset = useRef({ top: 0, left: 0 })
	const ref = useRef<HTMLDivElement>()

	useLayoutEffect(() => {
		const element = ref.current
		if (!element) return

		offset.current = {
			top: element.offsetTop,
			left: element.offsetLeft,
		}

		if (i === originIndex) {
			originOffset.current = offset.current
		}
	}, [delayPerPixel])

	useEffect(() => {
		const dx = Math.abs(offset.current.left - originOffset.current.left)
		const dy = Math.abs(offset.current.top - originOffset.current.top)
		const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
		delayRef.current = d * delayPerPixel
	}, [delayPerPixel])

	return (
		<Box
			className='col-span-1 h-[64px] sm:h-[100px] md:h-[96px] lg:h-[105px] xl:h-[120px] bg-background rounded-[2px] transition-all duration-1000'
			ref={ref}
			variants={itemVariants}
			custom={delayRef}
		/>
	)
}

const itemVariants = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	visible: (delayRef: MutableRefObject<number>) => ({
		opacity: 1,
		scale: 1,
		transition: { delay: delayRef.current },
	}),
}

type BoxProps = {
	ref: MutableRefObject<any>
	variants: typeof itemVariants
	custom: MutableRefObject<number>
}

const Box = tw(motion.div)<BoxProps>``
