import { ReactElement } from 'react'

type TabTriggerProps = {
	id: number
	value: string
	title: string
}

type TabContentProps = {
	id: number
	value: string
	content: ReactElement
}

type ProfileContentProps = {
	summary: string
}

export type { ProfileContentProps, TabContentProps, TabTriggerProps }
