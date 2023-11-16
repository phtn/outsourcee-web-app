import { db } from '@/lib/db'
import { doc, setDoc } from 'firebase/firestore'
import { toast } from 'sonner'
import { RegistrationValues } from '../_components/registration/types'

const ErrorToast = (error: Error) =>
	toast('Error', {
		description: error.message,
		duration: 5000,
	})

const OkToast = () =>
	toast('Awesome!', {
		description: 'Successful Registration.',
		duration: 5000,
	})

const regCollection: string = process.env.NEXT_PUBLIC_REGISTRATION as string
const POST_RegisterUser = (payload: RegistrationValues) => {
	const Err = (error: Error) => {
		ErrorToast(error)
	}

	const Ok = () => {
		OkToast()
	}

	return setDoc(doc(db, regCollection, payload.email), {
		...payload,
	}).then(Ok, Err)
}

export { POST_RegisterUser }
