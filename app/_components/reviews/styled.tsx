import tw from 'tailwind-styled-components'

const Container = tw.div`
  mb-24
`

const ReviewContent = tw.div`
  flex w-screen py-4 space-x-6 px-6 sm:space-x-10 sm:px-10
`

const Item = tw.div`
  bg-[#eff3fc] rounded-3xl 
`

const Cell = tw.div`
  h-[calc(100vw-50px)] w-[calc(100vw-44px)] sm:h-[calc(100vw/2)] sm:w-[calc(100vw/1.5)] md:h-[calc(100vw/3)] md:w-[calc(100vw/2)] lg:w-[calc(100vw/2.5)] lg:h-[calc(100vw/3)] xl:h-[calc(100vw/4.2)] xl:w-[calc(100vw/3.36)]
`

const Stack = tw.div`
  m-10 flex flex-col h-full
`

const TitleContainer = tw.div`
  h-[75px] flex items-center py-3 
`

const TitleText = tw.p`
  text-[1.5rem] sm:text-[1.75rem] font-bold text-foreground
`

const ContentText = tw.p`
  text-muted-foreground text-sm text-justify
`

const AuthorText = tw.p`
  border-l-4 border-secondary-foreground text-foreground text-sm font-bold pl-3
`

const ContentContainer = tw.div`
  flex justify-start pb-3
`

const AuthorContainer = tw.div`
  flex h-full items-end justify-end py-6
`

const AuthorContent = tw.div`
  flex items-center
`

export {
	AuthorContainer,
	AuthorContent,
	AuthorText,
	Cell,
	Container,
	ContentContainer,
	ContentText,
	Item,
	ReviewContent,
	Stack,
	TitleContainer,
	TitleText,
}
