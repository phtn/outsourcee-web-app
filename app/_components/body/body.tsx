'use client'
import { useRef } from 'react'
import Landing from '../landing/landing'
import FirstPanel from '../panels/first'

const Body = () => {
	const nextRef = useRef<HTMLDivElement>(null)

	const scrollToNext = () => {
		nextRef.current?.scrollIntoView({ behavior: 'smooth' })
	}
	return (
		<>
			<Landing scrollToNext={scrollToNext} />
			<FirstPanel />
		</>
	)
}

export default Body
