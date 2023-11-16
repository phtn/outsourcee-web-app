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
import { useCallback, useEffect, useState } from 'react'
import { map } from '@/app/_utils/helpers'
import { FormProps } from './types'
import { Loader2 } from 'lucide-react'
import { SelectLocation } from './select-location'
import { POST_RegisterUser } from '@/app/_api/post'

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.',
	}),
	email: z.string().min(2, {
		message: 'Invalid Email.',
	}),
	phone: z.string().min(10, {
		message: 'Invalid Phone Number',
	}),
	location: z.string().min(4, {
		message: 'Select your location.',
	}),
})

const checkEmail = (email: string) => {
	const emailRegistered = localStorage.getItem('registration')
	return emailRegistered === email
}

export function RegistrationForm() {
	const [loading, setLoading] = useState(false)
	const [registeredEmail, setRegisteredEmail] = useState(false)

	useEffect(() => {
		const registered = localStorage.getItem('registration')
		if (registered !== null) {
			setRegisteredEmail(true)
			setLoading(false)
		}

		return () => {
			registered
		}
	}, [registeredEmail, loading])

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			location: '',
		},
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		setLoading(true)

		localStorage.setItem('registration', values.email)
		console.log(values)
		POST_RegisterUser(values).then(() => {
			setLoading(false)
			setRegisteredEmail(true)
		})
	}

	const HeaderOptions = useCallback(() => {
		const options = map(<FormLoading />, <FormActive />)
		return <>{options.get(loading)}</>
	}, [loading])

	const RegistrationOptions = useCallback(() => {
		const email = localStorage.getItem('registration')
		const options = map(
			<RegisteredEmail email={email as string} />,
			<FormComponent
				form={form}
				onSubmit={onSubmit}
			/>
		)
		return <>{options.get(registeredEmail && !loading)}</>
	}, [loading, form, registeredEmail])

	const FormOptions = useCallback(() => {
		const options = map(<FormLoader />, <RegistrationOptions />)
		return <>{options.get(loading)}</>
	}, [loading, form])

	return (
		<div className='flex justify-center mb-10 h-[550px]'>
			<div className='border-1 border-primary-foreground bg-primary-foreground/5 p-3 rounded w-full sm:w-96'>
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
			<FormField
				control={form.control}
				name='location'
				render={({ field }) => (
					<SelectLocation onValueChange={field.onChange} />
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
		<Loader2 className='animate-spin text-secondary-foreground' />
	</div>
)

const FormActive = () => (
	<h2 className='text-sm bg-secondary-foreground/30 p-3 mb-10'>
		Fill out this form to register.
	</h2>
)

const FormLoading = () => (
	<h2 className='text-sm bg-secondary-foreground/30 p-3 mb-10'>
		Registering your account.
	</h2>
)

const RegisteredEmail = ({ email }: { email: string }) => (
	<div className='h-32'>
		<span>{email} already registered.</span>
	</div>
)
