import tw from 'tailwind-styled-components'
import { HeaderProps } from './types'

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
  text-[2rem] ml-2 md:text-[4rem] 
  font-extrabold text-foreground 

`
const TertiarySubtextContainer = tw.div`
  w-[400px] py-2 md:py-4 mx-2 px-4
  skew-x-[-16deg] bg-background 
  border-l-8 
  border-secondary-foreground
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

export { Primary, Secondary, Tertiary }
