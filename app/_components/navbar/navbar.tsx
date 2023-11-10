'use client'

import useToggleMode from '@/app/_utils/hooks/useToggleMode'
import { Brand, BrandName, MoonStar, Sun, NavContainer } from './styled'
import { Switch } from '@/components/ui/switch'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useCallback } from 'react'
import { map } from '@/app/_utils/helpers'
import Image from 'next/image'
import { ToggleProps } from './types'

const Navbar = () => {
	const { checked, toggleMode } = useToggleMode()

	const Logo = useCallback(() => {
		const options = map(<DarkLogo />, <LightLogo />)
		return <>{options.get(checked)}</>
	}, [checked])

	return (
		<NavContainer>
			<motion.div
				className='z-50'
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.5, delay: 1.1 }}>
				{/* <Brand> */}
				<Logo />
				{/* </Brand> */}
			</motion.div>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.5, delay: 1.3 }}>
				<ToggleMode
					checked={checked}
					toggleMode={toggleMode}
				/>
			</motion.div>
		</NavContainer>
	)
}

const DarkLogo = () => (
	<Image
		alt='logo'
		src='/logo/Outsourcee_Logo_white.png'
		height={400}
		width={400}
		className='md:h-16 h-12 w-auto '
	/>
)

const LightLogo = () => (
	<Image
		alt='logo'
		src='/logo/Outsourcee_Logo.png'
		height={400}
		width={400}
		className='md:h-16 h-12 w-auto '
	/>
)

const ToggleMode = ({ checked, toggleMode }: ToggleProps) => {
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
