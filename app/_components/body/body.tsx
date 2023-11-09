'use client'
import { useRef } from 'react'
import Landing from '../landing/landing'
import FirstPanel from '../panels/first-panel'
import { BodyContainer } from './styled'
import { Grid } from '../motion/grid'

const Body = () => {
	const nextRef = useRef<HTMLDivElement>(null)

	const scrollToNext = () => {
		nextRef.current?.scrollIntoView({ behavior: 'smooth' })
	}
	return (
		<BodyContainer>
			<Grid />
			<Landing scrollToNext={scrollToNext} />
		</BodyContainer>
	)
}

export default Body
