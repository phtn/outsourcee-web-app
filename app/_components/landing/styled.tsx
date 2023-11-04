import tw from 'tailwind-styled-components'

const LandingContainer = tw.div`
  flex
  flex-col
  h-full
  w-full
  bg-gradient-to-br
  from-slate-900
  to-slate-200
  transition-colors
  duration-1000
`

const HeroContainer = tw.div`
`

const HeroContent = tw.div`
  h-64
  md:h-[450px]
  flex
  flex-col
  items-center
  justify-center
  w-full
`

const HeroPrimary = tw.div`
  h-12
  flex
  items-center
  dark:bg-background/5
  border-foreground
  skew-x-[-16deg]
  px-6
  md:h-24
  flex-nowrap
  border-t-0
  md:hover:px-8
  transition-all
  duration-1000
`

const HeroSecondary = tw.div`
  animate-in
  h-10
  flex
  items-center
  justify-center
  bg-secondary-foreground
  dark:bg-primary-foreground
  skew-x-[-16deg]
  px-8
  border-accent
  md:h-14
  md:px-24
  rounded-lg
  transition-all
  duration-1000
`
const HeroLabelContainer = tw.div`
  skew-x-[16deg]
  flex
`

const PrimaryLabel = tw.h2`
  dark:text-secondary-foreground
  text-primary-foreground
  text-2xl
  font-extrabold
  md:text-[3rem]
`

const SecondaryLabel = tw.h2`
  text-sm
  text-foreground
  md:text-xl
  font-bold
  px-3
  md:px-6
`

const ActionContainer = tw.section`
  flex
  h-[calc(100vh-88.05%)]
  items-center
  justify-center
  w-full
  backdrop-blur-sm
`

const FooterWave = tw.div`
  z-10 
  w-full 
  h-[700px] 
  mt-[-500px] 
  bg-cover 
  bg-[url('/svg/outsourcee-waves-v1.svg')]
`

export {
	ActionContainer,
	FooterWave,
	HeroContainer,
	HeroContent,
	HeroPrimary,
	HeroLabelContainer,
	HeroSecondary,
	LandingContainer,
	PrimaryLabel,
	SecondaryLabel,
}
