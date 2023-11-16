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
			<span className='text-xs font-bold bg-foreground dark:bg-primary-foreground dark:text-foreground text-white py-1 px-3 rounded '>
				Register
			</span>
		</SheetTrigger>
		<SheetContent
			className='w-full'
			side={'bottom'}>
			<SheetHeader>
				<SheetTitle>
					<Header
						tag='Join us'
						title='Outsourcee Registration'
					/>
					<HeaderGap />
				</SheetTitle>
				{/* <SheetDescription className='py-8 sm:w-96 self-center'>
					An Outsourcee is a skilled individual that provides quality service to
					their clients. If you want to connect to broad range of clients, this
					s the place for you!
				</SheetDescription> */}
			</SheetHeader>
			<div className='md:grid md:grid-cols-2'>
				<RegistrationForm />
				<div
					className={`bg-[url('/images/worker.webp')] hidden md:flex bg-cover`}></div>
			</div>
		</SheetContent>
	</Sheet>
)

export default Registration
