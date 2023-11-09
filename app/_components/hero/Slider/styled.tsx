import tw from 'tailwind-styled-components'

const SliderContainer = tw.div`
  flex h-screen w-full items-center justify-center
  transition-transform duration-500
  group hover:scale-105 
`

export { SliderContainer }
