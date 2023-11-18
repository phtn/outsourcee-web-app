import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { RegistrationForm } from './form'
import { Header, HeaderGap } from '../header'

const Registration = () => (
	<Sheet>
		<SheetTrigger>
			<span className='text-xs font-bold bg-foreground dark:bg-primary-foreground dark:text-foreground text-white py-2 px-3 rounded mx-3 '>
				Register
			</span>
		</SheetTrigger>
		<SheetContent
			className='w-full'
			side={'right'}>
			<div>
				<RegistrationForm />
			</div>
		</SheetContent>
	</Sheet>
)

export default Registration
