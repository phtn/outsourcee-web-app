import { useEffect, useState } from 'react'
const useDimensions = () => {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)
	const [cells, setCells] = useState(300)

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

		if (width < 576) {
			// Extra small (xs) - Mobile devices
			setCells(200)
		} else if (width >= 576 && width < 768) {
			// Small (sm) - Tablets
			setCells(180)
		} else if (width >= 768 && width < 992) {
			// Medium (md) - Small laptops and tablets
			setCells(180)
		} else if (width >= 992 && width < 1200) {
			// Large (lg) - Desktops
			setCells(240)
		} else {
			// Extra large (xl) - Larger desktops and high-resolution displays
			setCells(380)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [width])

	return { cells, width, height }
}

export default useDimensions
