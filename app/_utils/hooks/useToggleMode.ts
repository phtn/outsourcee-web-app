import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { toggleState } from '../helpers'

const useToggleMode = () => {
	const { setTheme } = useTheme()
	const [checked, setChecked] = useState(true)

	const toggleMode = () => toggleState(setChecked)

	useEffect(() => {
		if (checked) {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}, [checked])

	return { checked, toggleMode }
}

export default useToggleMode
