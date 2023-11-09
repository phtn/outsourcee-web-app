import tw from 'tailwind-styled-components'
/*
xl:h-[2100px]
  lg:h-[1900px]
  md:h-[2000px]
  h-[1700px]

*/
const LandingContainer = tw.div`
  flex-col
  w-full
  bg-gradient-to-br
  
  transition-colors
  duration-1000
  overflow-hidden
  absolute 
  top-0
  z-30
`

const LandingContent = tw.div`
  bg-gradient-to-b
  from-transparent
  to-background
  overflow-scroll
  h-screen
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

/*

xl:h-[1400px]
  lg:h-[1600px]
  md:h-[1600px]
  h-[1600px]
  xl:mt-[-400px]
  lg:mt-[-360px]
  md:mt-[-132px]
  mt-[-200px]

*/

export {
	ActionContainer,
	HeroContainer,
	HeroContent,
	HeroPrimary,
	HeroLabelContainer,
	HeroSecondary,
	LandingContent,
	LandingContainer,
	PrimaryLabel,
	SecondaryLabel,
}
