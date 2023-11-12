import Image from 'next/image'
import tw from 'tailwind-styled-components'
import { FeatureItemProps, FeatureHeaderProps } from './types'

const Container = tw.div`
  h-fit w-screen flex flex-col overflow-hidden
	py-16
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
  shadow-xl shadow-[#54c8e8]/30
`

const HeaderTag = tw.h2`
  text-white font-extrabold text-[0.64rem] 
  uppercase tracking-[2.5px] py-1
`

const HeaderTitleContainer = tw.div`
  h-[120px] flex items-center justify-center
`

const HeaderTitle = tw.h2`
  text-[2.5rem] font-light
`

const HeaderSeparator = tw.div`
  w-[140px] border-b-4 rounded-full border-secondary-foreground/70
`

const Header = ({ tag, title }: FeatureHeaderProps) => (
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

const HeaderGap = tw.div`
  h-[75px]
`

const GridContainer = tw.div`
  flex flex-col md:h-fit md:grid md:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 lg:px-24
`

// Feature Item

const FeatureItemContainer = tw.div`
  flex lg:h-[200px] h-[170px] w-full
`

const FeatureItemContent = tw.div`
  flex items-start justify-center 
  lg:w-[calc(100vw/3*0.3-1rem)] lg:h-[calc(100vw/3*0.3-1rem)]
	py-[1rem] md:py-0
`

const FeatureIconContainer = tw.div`
  flex items-center justify-center 
	h-12 w-12 md:h-20 md:w-20  
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
  h-fit lg:w-[calc(100vw/3*0.45)]
`
const FeatureDescriptionText = tw.h3`
  text-sm leading-4 text-muted-foreground tracking-wide
`

const Item = ({ id, title, description, src }: FeatureItemProps) => (
	<FeatureItemContainer>
		<FeatureItemContent>
			<FeatureIconContainer>
				<Image
					alt='verified icon'
					src={src}
					height={100}
					width={100}
					className='h-10 w-10 md:h-16 md:w-16 text-primary-foreground'
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

export { Container, Header, HeaderGap, GridContainer, Item }
