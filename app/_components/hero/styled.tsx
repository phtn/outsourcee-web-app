import Image, { ImageProps } from 'next/image'
import tw from 'tailwind-styled-components'

const HeroContainer = tw.div`
  h-fit
`

const HeroContent = tw.div`
  h-fit
  md:h-screen
  z-20
  justify-center
 grid
  md:grid-cols-2
  grid-cols-1
`

const HeroPrimary = tw.div`
  flex items-center justify-center sm:pb-16 
  pt-24 sm:pt-36 h-[550px] sm:h-[600px] md:h-[700px]
`
const PrimaryContent = tw.div`
  flex flex-col justify-evenly h-[400px] md:h-[450px] 
  px-8 sm:pl-24 lg:pl-32 lg:pr-14 z-40
`
const HeadlineText = tw.h1`
  text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem]  
  leading-[2rem] md:leading-[3.25rem]
  tracking-wide font-bold font-sans
  text-foreground
`
const HeadlineContainer = tw.div`
  flex
  md:h-fit
  h-[72px]
  sm:w-96 md:w-[500px]
`

const HeadlineContent = ({ headline }: { headline: string }) => (
	<HeadlineContainer>
		<HeadlineText>{headline}</HeadlineText>
	</HeadlineContainer>
)

const SubtextContainer = tw.div`
  flex items-center border-l-8 border-secondary-foreground py-2 px-4 ml-[-18px] h-[72px]
`
const SubtextContent = tw.h2`
  text-[0.75rem] sm:text-sm 
  text-muted-foreground
  font-normal tracking-wide 
`

const Subtext = ({ subtext }: { subtext: string }) => (
	<SubtextContainer>
		<SubtextContent>{subtext}</SubtextContent>
	</SubtextContainer>
)

const StoreContainer = tw.div`
  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-4 md:gap-y-4 lg:gap-y-6 sm:mr-8
`

const StoreContent = tw.div`
  z-30
  py-3
  flex
  bg-cover
  rounded-xl
  bg-no-repeat
  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] 
  bg-black
  border
  dark:border-[#0b4454]
  dark:hover:border-primary-foreground
  hover:scale-105
  transition-all
  duration-300
  overflow-hidden
  items-center
  justify-center
  w-fit
  xl:px-4
  md:px-2
  px-2

`

const StoreImage = tw(Image)<ImageProps>`
  xl:h-fit
  h-10
  w-auto
`

const StoreItem = (props: ImageProps) => (
	<StoreContent>
		<StoreImage {...props} />
	</StoreContent>
)

const HeroSecondary = tw.div`
  md:h-screen
  md:flex
  h-fit
`

const WaveOne = tw.div`
  z-50
  w-screen 
  h-full
  xl:bg-contain
  bg-contain
  bg-no-repeat
  bg-[url('/svg/outsourcee-waves-v2.svg')]
  absolute
  xl:top-[calc(100vh-270px)]
  lg:top-[calc(100vh-200px)]
  md:top-[calc(100vh-164px)]
  top-[calc(100vh-80px)]
  xl:mb-[-65px]
`

const FooterContent = tw.div`
  relative flex items-end justify-end h-[270px] p-3 z-50
`
const FooterItem = tw.h3`
  text-xs text-muted dark:text-foreground/20 font-medium
  tracking-wide
`

export {
	FooterContent,
	FooterItem,
	HeadlineContent,
	HeroContainer,
	HeroContent,
	HeroPrimary,
	HeroSecondary,
	PrimaryContent,
	StoreContainer,
	StoreItem,
	Subtext,
	WaveOne,
}
