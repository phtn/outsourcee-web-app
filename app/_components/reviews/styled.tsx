import tw from 'tailwind-styled-components'

const Container = tw.div`
  mb-24
`

const ReviewContent = tw.div`
  flex w-screen py-4 space-x-6 px-6 sm:space-x-10 sm:px-10
`

const Item = tw.div`
  bg-[#eff3fc] dark:bg-primary-foreground rounded-3xl 
`

const Cell = tw.div`
  h-[calc(100vw-75px)] w-[calc(100vw-44px)] sm:h-[calc(100vw/2.25)] sm:w-[calc(100vw/1.5)] md:h-[calc(100vw/2.75)] md:w-[calc(100vw/2)] lg:w-[calc(100vw/2.5)] lg:h-[calc(100vw/3.5)] xl:h-[calc(100vw/4.5)] xl:w-[calc(100vw/3.36)]
`

const Stack = tw.div`
  m-10 flex flex-col h-full
`

const TitleContainer = tw.div`
  h-[75px] flex items-center py-3
`

const TitleText = tw.p`
  text-[1.25rem] sm:text-[1.75rem] font-bold text-foreground dark:text-slate-900
`

const ContentText = tw.p`
  dark:text-white text-muted-foreground text-sm text-justify
`

const AuthorText = tw.p`
  border-l-4 border-secondary-foreground text-foreground text-sm font-bold pl-3 py-[6px] 
`

const ContentContainer = tw.div`
  flex justify-start pb-3
`

const AuthorContainer = tw.div`
  flex h-full items-end justify-end pb-6
`

const AuthorContent = tw.div`
  flex justify-center
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
