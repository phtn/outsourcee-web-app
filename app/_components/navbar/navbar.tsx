'use client'

import useToggleMode from '@/app/_utils/hooks/useToggleMode'
import { Brand, BrandName, MoonStar, Sun, NavContainer } from './styled'
import { Switch } from '@/components/ui/switch'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useCallback } from 'react'
import { map } from '@/app/_utils/helpers'
import Image from 'next/image'

const Navbar = () => (
	<NavContainer>
		<motion.div
			className='z-50'
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ duration: 0.5, delay: 1.1 }}>
			{/* <Brand> */}
			<Image
				alt='logo'
				src='/logo/Outsourcee_Logo.png'
				height={400}
				width={400}
				className='h-16 w-auto '
			/>
			{/* </Brand> */}
		</motion.div>
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ duration: 0.5, delay: 1.3 }}>
			<ToggleMode />
		</motion.div>
	</NavContainer>
)

const ToggleMode = () => {
	const { checked, toggleMode } = useToggleMode()

	const IconOptions = useCallback(() => {
		const icons = map(<Sun />, <MoonStar />)
		return <>{icons.get(checked)}</>
	}, [checked])

	return (
		<Button
			size='icon'
			variant='ghost'
			onClick={toggleMode}>
			<IconOptions />
		</Button>
	)
}

const SwitchMode = () => {
	const { checked, toggleMode } = useToggleMode()

	return (
		<Switch
			checked={checked}
			onCheckedChange={toggleMode}
		/>
	)
}

export default Navbar
