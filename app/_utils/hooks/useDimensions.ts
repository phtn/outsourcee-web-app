import { useEffect, useState } from 'react'
const useDimensions = () => {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}

		const handleResize = () => {
			if (typeof window !== 'undefined') {
				setWidth(window.innerWidth)
				setHeight(window.innerHeight)
			}
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return { width, height }
}

export default useDimensions
