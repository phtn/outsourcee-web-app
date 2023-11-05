import tw from 'tailwind-styled-components'

const WaveOne = tw.div`
  z-60 
  w-full 
  h-[330px]
  xl:bg-contain
  bg-cover
  bg-no-repeat
  bg-[url('/svg/outsourcee-waves-v2.svg')]
  relative
  xl:mb-[-65px]
`

const PanelContainer = tw.div`
  h-[700px] relative bg-primary-foreground z-40
  flex
  md:grid
  md:grid-cols-3
`

export { PanelContainer, WaveOne }
