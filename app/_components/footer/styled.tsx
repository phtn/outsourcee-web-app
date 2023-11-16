import Link from 'next/link'
import tw from 'tailwind-styled-components'

const GridContainer = tw.div`
  h-[700px] md:h-[450px] bg-secondary-foreground md:grid md:grid-cols-3 p-6 
`

const PrimaryContent = tw.div`
  flex flex-col
`

const PrimaryDetails = tw.div`
  p-3
`

const SecondaryContent = tw.div`
  flex flex-col items-start justify-center md:items-center md:justify-start p-3 
`

const LinkItem = tw(Link)`
  py-2 no-underline hover:underline hover:underline-offset-4
`

const LinkText = tw.span`
  text-white font-bold
`

const TertiaryContent = tw.div`
  grid grid-cols-3 items-center justify-center md:justify-center md:items-center h-[100px] p-3 border-0 
`

export {
	GridContainer,
	LinkItem,
	LinkText,
	PrimaryContent,
	PrimaryDetails,
	SecondaryContent,
	TertiaryContent,
}
