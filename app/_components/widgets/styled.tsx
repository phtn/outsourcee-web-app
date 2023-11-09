import tw from 'tailwind-styled-components'
import { HeaderProps } from './types'
import { ReactElement, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import { TinyCalloutProps } from '../panels/types'

const HeaderContainer = tw.div`
  h-fit
  flex
  flex-col
  justify-center
`
const SubtextContent = tw.div`
  skew-x-[16deg]
`

const PrimaryTitle = tw.h2`
  text-[2rem] md:text-[4rem] 
  font-extrabold text-primary-foreground 
`
const PrimarySubtextContainer = tw.div`
  w-[400px] py-2 md:py-4 mx-2 px-4
  skew-x-[-16deg] bg-primary/40 
  backdrop-blur-lg border-l-8 
  border-secondary-foreground
`
const PrimarySubtext = tw.h2`
  md:text-[16px] font-medium 
  text-sm text-zinc-500 
  dark:text-background 
`

const SecondaryTitle = tw.h2`
  text-[2rem] ml-2 md:text-[4rem] 
  font-extrabold text-secondary-foreground 
`

const TertiaryTitle = tw.h2`
  text-[2.5rem] ml-2 md:text-[4rem] 
  font-extrabold text-foreground 
`

const TertiarySubtextContainer = tw.div`
  lg:w-[500px] md:w-[650px] py-2 md:py-4 mx-2 px-4
  skew-x-[-16deg] bg-background 
  border-secondary-foreground
  border-l-8 
`

const TertiarySubtext = tw.h2`
  md:text-[16px] font-medium 
  text-sm text-zinc-500 
  dark:text-foreground 
`

const Primary = ({ title, subtext }: HeaderProps) => (
	<HeaderContainer>
		<PrimaryTitle>{title}</PrimaryTitle>
		<PrimarySubtextContainer>
			<SubtextContent>
				<PrimarySubtext>{subtext}</PrimarySubtext>
			</SubtextContent>
		</PrimarySubtextContainer>
	</HeaderContainer>
)

const Secondary = ({ title, subtext }: HeaderProps) => (
	<HeaderContainer>
		<SecondaryTitle>{title}</SecondaryTitle>
		<PrimarySubtextContainer>
			<SubtextContent>
				<PrimarySubtext>{subtext}</PrimarySubtext>
			</SubtextContent>
		</PrimarySubtextContainer>
	</HeaderContainer>
)

const Tertiary = ({ title, subtext }: HeaderProps) => (
	<HeaderContainer>
		<TertiaryTitle>{title}</TertiaryTitle>
		<TertiarySubtextContainer>
			<SubtextContent>
				<TertiarySubtext>{subtext}</TertiarySubtext>
			</SubtextContent>
		</TertiarySubtextContainer>
	</HeaderContainer>
)

const TinyContainer = tw.div`
  flex items-center justify-center
	w-[180px] rounded-lg
`
const IconContainer = tw.div`
  flex items-center justify-center h-12 w-16 rounded-0 
	bg-black/5 backdrop-blur-lg mono 
`

const LabelContainer = tw.div`
  flex flex-col justify-center tracking-wider bg-black/5 w-[110px] h-12
`

const TextOne = tw.span`
	font-extrabold
`
const TextTwo = tw.span`
	text-sm
	mt-[-6px] text-foreground/80
	font-medium
	ml-[1px]
`

const TinyCallout = ({ Icon, text1, text2 }: TinyCalloutProps) => (
	<TinyContainer>
		<IconContainer>
			<Icon className='' />
		</IconContainer>
		<LabelContainer>
			<div className='flex flex-col'>
				<TextOne>{text1}</TextOne>
				<TextTwo>{text2}</TextTwo>
			</div>
		</LabelContainer>
	</TinyContainer>
)

export { Primary, Secondary, Tertiary, TinyCallout }
