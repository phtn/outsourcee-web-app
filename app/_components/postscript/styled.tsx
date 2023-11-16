import Image from 'next/image'
import tw from 'tailwind-styled-components'

const GridContainer = tw.div`
  h-96 sm:h-[600px] md:grid md:grid-cols-5 mb-24
`

const PrimaryContent = tw.div`
  flex flex-col justify-center items-start col-span-2 pl-8 sm:pl-10
`

const Headline = tw.h1`
  font-extrabold text-[2.5rem] text-foreground my-3 w-56 sm:w-96
`

const Subtext = tw.h2`
  border-l-4 border-secondary-foreground 
  pl-4 text-sm text-muted-foreground w-72 sm:w-80
`

const SecondaryContent = tw.div`
  flex flex-col md:justify-center md:items-center
`

const Col = tw.div`
  col-span-3
`
const Row = tw.div`
  h-full hidden sm:flex items-center justify-around mx-10
`

const PhoneSmall = tw(Image)`
  h-80 w-auto hover:scale-110 transition-transform duration-500
`

const PhoneBig = tw(Image)`
  h-96 w-auto hover:scale-110 transition-transform duration-500
`

const LinksContainer = tw.div`
  w-full flex mb-16
`

export {
	Col,
	GridContainer,
	Headline,
	LinksContainer,
	PrimaryContent,
	PhoneBig,
	PhoneSmall,
	Row,
	SecondaryContent,
	Subtext,
}
