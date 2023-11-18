import Image from 'next/image'
import {
	BlockItem,
	FooterContainer,
	FooterText,
	GridContainer,
	LinkItem,
	LinkText,
	PrimaryContent,
	PrimaryDetails,
	SecondaryContent,
	TertiaryContent,
} from './styled'
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { ReactElement } from 'react'
import { Header } from '../header'
import { RegistrationForm } from '../registration/form'
import { KeyValue, ListProps, howItWorks, requirements } from './footer-data'
import Link from 'next/link'

const Footer = () => {
	return (
		<GridContainer>
			<Primary />
			<Secondary />
			<Tertiary />
		</GridContainer>
	)
}

const Primary = () => (
	<PrimaryContent>
		<Image
			alt=''
			src={'/logo/Outsourcee_Logo_white.webp'}
			height={400}
			width={400}
			className='w-56'
		/>
		<PrimaryDetails>
			<span className='text-xs text-white'>Developed by</span>
			<p className='text-sm text-white font-bold'>
				Comptrolla Technologies, Inc.
			</p>
			<div className='w-44'>
				<p className='text-xs text-white font-medium'>
					Ste 203 Tomasca Bldg. Cubao, Quezon City, 1109
				</p>
			</div>
		</PrimaryDetails>
	</PrimaryContent>
)

const Secondary = () => (
	<SecondaryContent>
		<div className='h-[72] flex flex-col items-start'>
			<ActionSheet
				trigger='How it works?'
				title='Where Your Skills Equals Opportunity!'
				description={''}
				content={<List array={howItWorks} />}
			/>

			<ActionSheet
				trigger='Register'
				title='Showcase Your Talents and Skills'
				description={''}
				content={<RegistrationForm />}
			/>

			<ActionSheet
				trigger='Requirements'
				title='Trusted & Verified Professionals'
				description={''}
				content={<List array={requirements} />}
			/>

			<LinkItem>
				<LinkText>Privacy Policy</LinkText>
			</LinkItem>
			<LinkItem>
				<LinkText>Terms of Use</LinkText>
			</LinkItem>
		</div>
	</SecondaryContent>
)

const Tertiary = () => (
	<TertiaryContent>
		<FacebookIcon className='h-8 w-8 text-white' />
		<InstagramIcon className='h-8 w-8 text-white' />
		<Link href='https://twitter.com/outsourceeapp/'>
			<div className={`h-8 w-8 bg-[url('/svg/twitterx.svg')] bg-contain`} />
		</Link>
	</TertiaryContent>
)

type ActionSheetProps = {
	trigger: string
	title: string
	description: string
	content: ReactElement
}

const ActionSheet = ({
	trigger,
	title,
	description,
	content,
}: ActionSheetProps) => (
	<Sheet>
		<SheetTrigger>
			<LinkItem>
				<LinkText>{trigger}</LinkText>
			</LinkItem>
		</SheetTrigger>
		<SheetContent className='flex flex-col overflow-y-scroll'>
			<SheetHeader>
				<Header
					tag='info'
					title={trigger}
				/>
			</SheetHeader>

			{content}

			<FooterContainer>
				<FooterText>{title}</FooterText>
				<DarkLogo />
			</FooterContainer>
		</SheetContent>
	</Sheet>
)

const DarkLogo = () => (
	<Image
		placeholder='blur'
		blurDataURL='/logo/Outsourcee_Logo_white.webp'
		alt='logo'
		src='/logo/Outsourcee_Logo_white.png'
		height={400}
		width={400}
		className='md:h-24 h-16 w-auto '
	/>
)

const List = ({ array }: ListProps) => (
	<div className=''>
		{array.map((item) => (
			<BlockItem
				key={item.title}
				title={item.title}
				subtext={item.subtext}
			/>
		))}
	</div>
)

export default Footer
