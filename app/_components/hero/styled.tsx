import Image, { ImageProps } from 'next/image'
import tw from 'tailwind-styled-components'

const HeroContainer = tw.div`
  h-fit
`

const HeroContent = tw.div`
  h-screen
  z-20
  flex
  justify-center
  md:grid
  md:grid-cols-2
`

const HeroPrimary = tw.div`
  flex items-center justify-center pb-16
`
const PrimaryContent = tw.div`
  flex flex-col justify-evenly h-[400px] 
  px-8 md:pl-20 lg:pl-32 lg:pr-14 z-40
`
const HeadlineText = tw.h1`
  text-[3rem] tracking-wide leading-[3rem] font-bold 
`
const HeadlineContainer = tw.div`
  flex
`

const Headline = ({ headline }: { headline: string }) => (
	<HeadlineContainer>
		<HeadlineText>{headline}</HeadlineText>
	</HeadlineContainer>
)

const SubtextContainer = tw.div`
  flex border-l-8 py-2 px-4 ml-[-18px]
`
const SubtextContent = tw.h2`
  text-[0.75rem] md:text-[1rem] text-slate-400 
  font-normal tracking-wide 
`

const Subtext = ({ subtext }: { subtext: string }) => (
	<SubtextContainer>
		<SubtextContent>{subtext}</SubtextContent>
	</SubtextContainer>
)

const StoreContainer = tw.div`
  grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6
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
  md:dark:border-[1px]
  dark:border-[0.5px]
  border-bg-primary/5
  hover:border-primary-foreground
  hover:scale-105
  transition-all
  duration-300
  overflow-hidden
  items-center
  justify-center
  w-fit
  md:px-4
  px-3
`

const StoreImage = tw(Image)<ImageProps>`
  h-8
  w-auto
`

const StoreItem = (props: ImageProps) => (
	<StoreContent>
		<StoreImage {...props} />
	</StoreContent>
)

const HeroSecondary = tw.div`
  h-screen
`

const WaveOne = tw.div`
  w-screen 
  h-full
  xl:bg-contain
  bg-cover
  bg-no-repeat
  bg-[url('/svg/outsourcee-waves-v2.svg')]
  absolute
  top-[calc(100vh-270px)]
  xl:mb-[-65px]
`

const FooterContent = tw.div`
  relative flex items-end justify-end h-[270px] p-3 z-50
`
const FooterItem = tw.h3`
  text-sm text-muted
`

export {
	FooterContent,
	FooterItem,
	Headline,
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
