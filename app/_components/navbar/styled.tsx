import { MoonStarIcon, SunIcon } from 'lucide-react'
import tw from 'tailwind-styled-components'

const NavContainer = tw.div`
  h-10
  flex
  w-full
  items-center 
  justify-between
  p-2
  lg:p-10
  absolute
  backdrop-blur-[30%]
  z-10
`

const Brand = tw.section`
  flex
  items-center
  justify-between
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
