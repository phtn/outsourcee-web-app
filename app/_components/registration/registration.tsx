import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { RegistrationForm } from './form'

const Registration = () => (
	<Sheet>
		<SheetTrigger>
			<span className='text-xs font-bold bg-foreground dark:bg-primary-foreground dark:text-foreground text-white py-1 px-3 rounded '>
				Register
			</span>
		</SheetTrigger>
		<SheetContent
			className='w-full'
			side={'bottom'}>
			<SheetHeader>
				<SheetTitle>
					<span className='px-4 py-2 bg-primary-foreground text-white rounded'>
						Outsourcee Registration
					</span>
				</SheetTitle>
				<SheetDescription className='py-8 sm:w-96 self-center'>
					An Outsourcee is a skilled individual that provides quality service to
					their clients. If you want to connect to broad range of clients, this
					s the place for you!
				</SheetDescription>
			</SheetHeader>
			<RegistrationForm />
		</SheetContent>
	</Sheet>
)

export default Registration
