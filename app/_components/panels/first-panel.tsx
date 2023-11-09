import { Checkbox } from '@/components/ui/checkbox'
import { PrimaryHeader, SecondaryHeader, TertiaryHeader } from '../widgets'
import { PanelContainer, WaveOne } from './styled'
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	BadgeCheckIcon,
	ChevronsRightIcon,
	GraduationCapIcon,
	RocketIcon,
	ShieldCheckIcon,
	StarIcon,
	TagsIcon,
	ThumbsUpIcon,
	UserCheckIcon,
} from 'lucide-react'
import ImageSlider from '../image-slider/image-slider'
import { TinyCalloutProps } from './types'
import { TinyCallout } from '../widgets/styled'

const FirstPanel = () => {
	return (
		<PanelContainer>
			<LeftModule />
			<RightModule />
		</PanelContainer>
	)
}

const callouts: TinyCalloutProps[] = [
	{ id: 0, Icon: UserCheckIcon, text1: 'Fully', text2: 'Verified' },
	{ id: 1, Icon: GraduationCapIcon, text1: 'Trained and', text2: 'Certified' },
	{ id: 2, Icon: BadgeCheckIcon, text1: 'Background', text2: 'Checked' },
	{ id: 3, Icon: ShieldCheckIcon, text1: 'Guaranteed', text2: 'Service' },
	{ id: 4, Icon: ChevronsRightIcon, text1: 'Rapid', text2: 'Response' },
	{ id: 5, Icon: ThumbsUpIcon, text1: 'Highly', text2: 'Reliable' },
	{ id: 6, Icon: StarIcon, text1: 'Skilled and', text2: 'Talented' },
	{ id: 7, Icon: TagsIcon, text1: 'Affordable', text2: 'Rates' },
]

const LeftModule = () => (
	<div className='bg-primary-foreground w-full p-6 z-70'>
		<TertiaryHeader
			title='The outsourcees'
			subtext='Our Trusted & Verified Professionals'
		/>
		<div className='py-12 grid grid-cols-2 gap-x-4 lg:gap-x-1 gap-y-10 md:px-8 w-full'>
			{callouts.map((props) => (
				<TinyCallout
					{...props}
					key={props.id}
				/>
			))}
		</div>
	</div>
)

const RightModule = () => (
	<div className='bg-primary-foreground xl:relative h-[258px] pt-14 z-60 px-3'>
		<div className='flex items-center bg-primary-foreground justify-center overflow-hidden z-50'>
			<ImageSlider />
		</div>
		<span>sign up</span>
	</div>
)

export default FirstPanel
