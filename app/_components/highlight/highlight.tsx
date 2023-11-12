import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Container, Header } from './styled'
import Image from 'next/image'
import { ReactElement } from 'react'

const Highlight = () => (
	<Container>
		<Primary />
		<Secondary />
	</Container>
)

const Primary = () => (
	<div className='h-full md:my-16 mx-6 md:flex hidden justify-end'>
		<Image
			alt=''
			src={'/lifestyle/life-v1.jpg'}
			height={400}
			width={400}
			className='h-32 md:h-96 w-auto rounded-full'
		/>
	</div>
)

const Secondary = () => (
	<div className='h-full md:my-16 '>
		<div className='h-fit p-8 border-secondary-foreground border-l-[0.33px]'>
			<div className='flex pb-10 md:pb-0'>
				<div
					className={`bg-[url('/lifestyle/life-v1.jpg')] bg-cover bg-no-repeat flex md:hidden h-32 w-56 mr-8 rounded-full`}
				/>
				<Header
					tag='popular'
					title='Samantha'
				/>
			</div>

			<Details />
		</div>
	</div>
)

type TabTriggerProps = {
	id: number
	value: string
	title: string
}

type TabContentProps = {
	id: number
	value: string
	content: ReactElement
}

type ProfileContentProps = {
	summary: string
}

const ProfileContent = ({ summary }: ProfileContentProps) => <>{summary}</>

const list = 'justify-start bg-transparent border-b border-secondary-foreground'
const trigger = `px-6 mr-2.5 md:mr-6 tracking-wider`
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
				className={content}
				value={item.value}>
				{item.content}
			</TabsContent>
		))}
	</Tabs>
)

export default Highlight
