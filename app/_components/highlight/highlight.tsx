import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProfileContentProps, TabContentProps, TabTriggerProps } from './types'
import { Header } from './header'
import {
	Container,
	Content,
	DesktopAvatar,
	MobileAvatar,
	PrimaryContent,
	SecondaryContent,
	Stack,
} from './styled'

const Highlight = () => (
	<Container>
		<Primary />
		<Secondary />
	</Container>
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
				<Header
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

const ProfileContent = ({ summary }: ProfileContentProps) => <>{summary}</>

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
		content: <ProfileContent summary='Profile Summary' />,
	},
	{
		id: 1,
		value: 'services',
		content: <ProfileContent summary='Services Summary' />,
	},
	{
		id: 2,
		value: 'certs',
		content: <ProfileContent summary='Certs Summary' />,
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
