import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProfileContentProps, TabContentProps, TabTriggerProps } from './types'
import { HighlightHeader } from './header'
import {
	Container,
	Content,
	DesktopAvatar,
	MobileAvatar,
	PrimaryContent,
	ProfileServices,
	SecondaryContent,
	Stack,
} from './styled'
import { Header } from '../header'

const Highlight = () => (
	<>
		<Header
			tag='popular'
			title='Top Outsourcees'
		/>
		<Container>
			<Primary />
			<Secondary />
		</Container>
	</>
)

const Primary = () => (
	<PrimaryContent>
		<DesktopAvatar
			alt=''
			src={'/lifestyle/life-v1.jpg'}
			height={500}
			width={500}
		/>
	</PrimaryContent>
)

const Secondary = () => (
	<SecondaryContent>
		<Stack>
			<Content>
				<MobileAvatar />
				<HighlightHeader
					tag='meet'
					title='Samantha'
					rating={(5).toFixed(1).toString()}
					reviews={78}
					subtext='Nail Specialist'
				/>
			</Content>
			<Details />
		</Stack>
	</SecondaryContent>
)

const ProfileContent = ({ summary }: ProfileContentProps) => (
	<p className='text-xs text-justify w-72 dark:text-slate-300'>{summary}</p>
)

const list = 'justify-start bg-transparent'
const trigger = `px-6 border-b border-secondary-foreground`
const content = `p-3 h-fit md:w-[450px]`

const triggers: TabTriggerProps[] = [
	{ id: 0, value: 'profile', title: 'Profile' },
	{ id: 1, value: 'services', title: 'Services' },
	{ id: 2, value: 'certs', title: 'Certificates' },
]
const contents: TabContentProps[] = [
	{
		id: 0,
		value: 'profile',
		content: (
			<ProfileContent
				summary={`
					Samantha have 5 years experiance in providing quality care and service to customers specializing in a wide range of services, 
					including manicures, pedicures, acrylics, gels, and nail art. Familiar with a variety of applications for improving the appearance 
					of nails and the best filling and polishing techniques to enhance the appearance of both your hands and feet.`}
			/>
		),
	},
	{
		id: 1,
		value: 'services',
		content: (
			<ProfileServices
				profileServices={[
					'Manicure',
					'Pedicure',
					'French Manicure',
					'Gel Manicure',
					'Nail Design',
					'Nail Extension',
					'Acrylic Nails',
				]}
			/>
		),
	},
	{
		id: 2,
		value: 'certs',
		content: (
			<ProfileContent summary='Beauty Care Services (Nail Care) NC II' />
		),
	},
]

const Details = () => (
	<Tabs
		defaultValue='profile'
		className=''>
		<TabsList className={list}>
			{triggers.map((item) => (
				<TabsTrigger
					key={item.id}
					className={trigger}
					value={item.value}>
					{item.title}
				</TabsTrigger>
			))}
		</TabsList>
		{contents.map((item) => (
			<TabsContent
				key={item.id}
				className={content}
				value={item.value}>
				{item.content}
			</TabsContent>
		))}
	</Tabs>
)

export default Highlight
