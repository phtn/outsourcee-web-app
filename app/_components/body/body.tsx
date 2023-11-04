'use client'
import { useRef } from 'react'
import Landing from '../landing/landing'

const Body = () => {
	const nextRef = useRef<HTMLDivElement>(null)

	const scrollToNext = () => {
		nextRef.current?.scrollIntoView({ behavior: 'smooth' })
	}
	return <Landing scrollToNext={scrollToNext} />
}

export default Body
