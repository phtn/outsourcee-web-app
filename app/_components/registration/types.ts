import { Dispatch, SetStateAction } from 'react'
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form'

interface RegistrationValues {
	name: string
	email: string
	phone: string
	referral: string
	location: string
}

type OnSubmit = {
	values: RegistrationValues
}

type FormProps = {
	form: UseFormReturn<RegistrationValues>
	onSubmit: (values: RegistrationValues) => void
}

type SetLocationProps = {
	onValueChange: (value: string) => void
}

export type { OnSubmit, FormProps, SetLocationProps, RegistrationValues }
