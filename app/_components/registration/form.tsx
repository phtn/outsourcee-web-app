'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import * as z from 'zod'
import { useCallback, useState } from 'react'
import { map } from '@/app/_utils/helpers'
import { FormProps } from './types'
import { RefreshCw } from 'lucide-react'

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'name must be at least 2 characters.',
	}),
	email: z.string().min(2, {
		message: 'Invalid Email.',
	}),
	phone: z.string().min(10, {
		message: 'Invalid Phone Number',
	}),
})

export function RegistrationForm() {
	const [loading, setLoading] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
		},
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values)
		setLoading(true)
	}

	const HeaderOptions = useCallback(() => {
		const options = map(<FormLoading />, <FormActive />)
		return <>{options.get(loading)}</>
	}, [loading])

	const FormOptions = useCallback(() => {
		const options = map(
			<FormLoader />,
			<FormComponent
				form={form}
				onSubmit={onSubmit}
			/>
		)
		return <>{options.get(loading)}</>
	}, [loading, form])

	return (
		<div className='flex justify-center mb-10 h-[500px]'>
			<div className='border p-3 rounded w-full sm:w-96'>
				<HeaderOptions />
				<FormOptions />
			</div>
		</div>
	)
}

const FormComponent = ({ form, onSubmit }: FormProps) => (
	<Form {...form}>
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className='space-y-8'>
			<FormField
				control={form.control}
				name='name'
				render={({ field }) => (
					<FormItem>
						<FormLabel className='text-xs'>Complete Name</FormLabel>
						<FormControl>
							<Input
								placeholder='Type your complete legal name.'
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='email'
				render={({ field }) => (
					<FormItem>
						<FormLabel className='text-xs'>Email Address</FormLabel>
						<FormControl>
							<Input
								placeholder='Email'
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='phone'
				render={({ field }) => (
					<FormItem>
						<FormLabel className='text-xs'>Phone Number</FormLabel>
						<FormControl>
							<Input
								placeholder='Phone Number'
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<Button
				type='submit'
				variant={'outline'}>
				Submit
			</Button>
		</form>
	</Form>
)

const FormLoader = () => (
	<div className='flex items-center justify-center'>
		<RefreshCw className='animate-spin' />
	</div>
)

const FormActive = () => (
	<h2 className='text-sm bg-slate-100 p-3 mb-10'>
		Fill out this form to register.
	</h2>
)

const FormLoading = () => (
	<h2 className='text-sm bg-slate-100 p-3 mb-10'>Registering.</h2>
)
