import { Checkbox } from '@/components/ui/checkbox'
import { PrimaryHeader, SecondaryHeader, TertiaryHeader } from '../widgets'
import { PanelContainer, WaveOne } from './styled'
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	BadgeCheckIcon,
	ShieldCheckIcon,
} from 'lucide-react'
import ImageSlider from '../image-slider/image-slider'

const FirstPanel = () => {
	return (
		<PanelContainer>
			<LeftModule />
			<RightModule />
		</PanelContainer>
	)
}

const LeftModule = () => (
	<div className='col-span-1 bg-primary-foreground w-full p-6 z-70'>
		<TertiaryHeader
			title='outsourcee'
			subtext='The app for every solution you need!'
		/>
		<div className='py-4 flex h-fit'>
			<BadgeCheckIcon className='mx-3' />
			<span>Verified users</span>
		</div>
		<div className='py-4 flex h-fit'>
			<ShieldCheckIcon className='mx-3' />
			<span>Safe and Secure</span>
		</div>
	</div>
)

const RightModule = () => (
	<div className='col-span-2 bg-primary-foreground flex p-6 z-60'>
		<div className='flex items-center justify-center overflow-hidden w-[800px] h-[500px] rounded-3xl p-6'>
			<ImageSlider />
		</div>
	</div>
)

export default FirstPanel
