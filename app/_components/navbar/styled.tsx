import { MoonStarIcon, SunIcon } from 'lucide-react'
import tw from 'tailwind-styled-components'

const NavContainer = tw.div`
  flex
  w-full
  items-center 
  justify-between
  px-6
  pt-4
  absolute
  top-0
  bg-gradient-to-b
  from-background
  to-transparent
  backdrop-blur-md
  z-50
`

const Brand = tw.section`
  flex
  h-fit
  items-center
  justify-center
`

const BrandName = tw.h1`
  font-extrabold
  text-xl
  md:text-3xl
`

const MoonStar = tw(MoonStarIcon)`
  h-4 w-4
`

const Sun = tw(SunIcon)`
  h-4 w-4
`

export { Brand, BrandName, NavContainer, MoonStar, Sun }
