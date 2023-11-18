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
import { FacebookIcon, InstagramIcon } from 'lucide-react'

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { ReactElement } from 'react'
import { Header } from '../header'
import { RegistrationForm } from '../registration/form'
import { ListProps, howItWorks, requirements, termsOfUse } from './footer-data'
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
			<ActionSheet
				trigger='Terms & Conditions'
				title=''
				description={''}
				content={<List array={termsOfUse} />}
			/>
			<LinkItem>
				<LinkText>Privacy Policy</LinkText>
			</LinkItem>
		</div>
	</SecondaryContent>
)

const Tertiary = () => (
	<TertiaryContent>
		<Link href='https://www.facebook.com/profile.php?id=61552807992840&mibextid=LQQJ4d'>
			<FacebookIcon className='h-8 w-8 text-white' />
		</Link>
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
