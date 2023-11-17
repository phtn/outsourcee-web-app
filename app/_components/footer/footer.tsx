import Image from 'next/image'
import {
	GridContainer,
	LinkItem,
	LinkText,
	PrimaryContent,
	PrimaryDetails,
	SecondaryContent,
	TertiaryContent,
} from './styled'
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

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
		<div className='h-[72] flex flex-col'>
			<LinkItem href={'/'}>
				<LinkText>How it works?</LinkText>
			</LinkItem>
			<LinkItem href={'/'}>
				<LinkText>Register as Outsourcee</LinkText>
			</LinkItem>
			<LinkItem href={'/'}>
				<LinkText>Outsourcee Requirements</LinkText>
			</LinkItem>
			<LinkItem href={'/'}>
				<LinkText>Privacy Policy</LinkText>
			</LinkItem>
			<LinkItem href={'/'}>
				<LinkText>Terms of Use</LinkText>
			</LinkItem>
		</div>
	</SecondaryContent>
)

const Tertiary = () => (
	<TertiaryContent>
		<FacebookIcon className='h-8 w-8 text-white' />
		<InstagramIcon className='h-8 w-8 text-white' />
		<TwitterIcon className='h-8 w-8 text-white' />
	</TertiaryContent>
)
export default Footer
