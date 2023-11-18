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
import { Loader2, MailCheckIcon } from 'lucide-react'
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
	referral: z.string().min(1, {
		message: 'Invalid Referral Code',
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
			referral: '',
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
		<div className='flex justify-center my-4 overflow-y-scroll'>
			<div className='border-1 border-primary-foreground bg-primary-foreground/5 p-3 rounded w-full sm:w-96 h-[600px]'>
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
			className='space-y-4'>
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
								type='email'
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
								type='number'
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='referral'
				render={({ field }) => (
					<FormItem>
						<FormLabel className='text-xs'>Phone Number</FormLabel>
						<FormControl>
							<Input
								placeholder='Referral Code'
								{...field}
								type='string'
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
	<div>
		<h2 className='text-foreground'> Join Us</h2>
		<h3 className='text-sm bg-secondary-foreground rounded p-2 mb-4'>
			Fill out this form to register.
		</h3>
	</div>
)

const FormLoading = () => (
	<h2 className='text-sm bg-secondary-foreground p-3 mb-6'>
		Registering your account.
	</h2>
)

const RegisteredEmail = ({ email }: { email: string }) => (
	<div className='border-1 dark:border-slate-500 py-6 rounded bg-background'>
		<div className='flex items-center justify-center'>
			<MailCheckIcon className='h-4 w-4 text-primary-foreground' />
			<span className='text-sm text-foreground font-bold mx-2'>
				Email Address
			</span>
		</div>
		<div className='h-16 flex items-center justify-center'>
			<span className='bg-primary-foreground text-white text-sm font-medium p-2 rounded'>
				{email}
			</span>
		</div>
		<div className='flex justify-center items-center'>
			<span className='text-sm text-foreground'>Successfully Registered!</span>
		</div>
	</div>
)
