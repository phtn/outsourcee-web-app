import { UseFormReturn } from 'react-hook-form'

interface Values {
	name: string
	email: string
	phone: string
}

type OnSubmit = {
	values: Values
}

type FormProps = {
	form: UseFormReturn<Values>
	onSubmit: (values: Values) => void
}

export type { OnSubmit, FormProps }
