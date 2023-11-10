import Image from 'next/image'
import tw from 'tailwind-styled-components'
import { FeatureItemProps, FeatureHeaderProps } from './types'

const FeaturesContainer = tw.div`
  h-screen w-screen flex flex-col overflow-hidden
`

const HeaderContainer = tw.div`
  w-full h-fit flex items-center justify-center
`

const HeaderContent = tw.div`
  w-fit flex flex-col items-center justify-center h-full
`

const HeaderTagContainer = tw.div`
  bg-primary-foreground h-fit w-[150px] px-3 py-[2px] 
  flex items-center justify-center rounded-[2px]
  shadow-md shadow-[#54c8e8]/20
`

const HeaderTag = tw.h2`
  text-foreground font-extrabold text-[0.64rem] 
  uppercase tracking-[2.5px] py-1
`

const HeaderTitleContainer = tw.div`
  h-[120px] flex items-center justify-center
`

const HeaderTitle = tw.h2`
  text-[2.5rem] font-light
`

const HeaderSeparator = tw.div`
  w-[120px] border-b-8 border-secondary-foreground/70
`

const FeatureHeader = ({ tag, title }: FeatureHeaderProps) => (
	<HeaderContainer>
		<HeaderContent>
			<HeaderTagContainer>
				<HeaderTag>{tag}</HeaderTag>
			</HeaderTagContainer>
			<HeaderTitleContainer>
				<HeaderTitle>{title}</HeaderTitle>
			</HeaderTitleContainer>
			<HeaderSeparator />
		</HeaderContent>
	</HeaderContainer>
)

const FeatureHeaderGap = tw.div`
  h-[75px]
`

const FeatureGridContainer = tw.div`
  h-fit grid grid-cols-3 px-24
`

// Feature Item

const FeatureItemContainer = tw.div`
  flex h-[200px] w-full
`

const FeatureItemContent = tw.div`
  flex items-center justify-center 
  w-[calc(100vw/3*0.3-1rem)] h-[calc(100vw/3*0.3-1rem)]
`

const FeatureIconContainer = tw.div`
  flex items-center justify-center h-20 w-20 
  bg-primary-foreground rounded-full
  shadow-xl shadow-[#54c8e8]/20
`

const FeatureDetail = tw.div`
  h-full flex flex-col flex-grow px-[1.25rem] py-[1rem]
`

const FeatureTitleContainer = tw.div`
  h-fit  pb-4
`

const FeatureTitle = tw.h2`
  font-bold tracking-wider text-[1.5rem] text-foreground leading-[1.5rem]
`

const FeatureDescriptionContainer = tw.div`
  h-fit w-[calc(100vw/3*0.45)]
`
const FeatureDescriptionText = tw.h3`
  text-sm leading-4 text-muted-foreground tracking-wide
`

const FeatureItem = ({ id, title, description, src }: FeatureItemProps) => (
	<FeatureItemContainer>
		<FeatureItemContent>
			<FeatureIconContainer>
				<Image
					alt='verified icon'
					src={src}
					height={100}
					width={100}
					className='h-16 w-16 text-primary-foreground'
				/>
			</FeatureIconContainer>
		</FeatureItemContent>
		<FeatureDetail>
			<FeatureTitleContainer>
				<FeatureTitle>{title}</FeatureTitle>
			</FeatureTitleContainer>
			<FeatureDescriptionContainer>
				<FeatureDescriptionText>{description}</FeatureDescriptionText>
			</FeatureDescriptionContainer>
		</FeatureDetail>
	</FeatureItemContainer>
)

export {
	FeaturesContainer,
	FeatureHeader,
	FeatureHeaderGap,
	FeatureGridContainer,
	FeatureItem,
}
