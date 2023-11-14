import Image from 'next/image'
import tw from 'tailwind-styled-components'

const Container = tw.div`
  h-[750px] w-full flex flex-col md:grid md:grid-cols-2
`

const PrimaryContent = tw.div`
  h-full md:my-16 mx-6 md:flex hidden justify-end
`

const SecondaryContent = tw.div`
  h-full sm:my-16
`

const Stack = tw.div`
  h-fit p-8
`

const Content = tw.div`
  flex items-center justify-center pb-10 sm:pb-6
`

const MobileAvatar = tw.div`
  bg-[url('/lifestyle/life-v1.webp')] bg-cover bg-no-repeat flex md:hidden h-[125px] w-[125px] mr-8 rounded-full
`

const DesktopAvatar = tw(Image)`
  h-32 md:h-96 w-auto rounded-full object-cover aspect-3/4 
`

export {
	Container,
	Content,
	DesktopAvatar,
	MobileAvatar,
	PrimaryContent,
	SecondaryContent,
	Stack,
}
