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

const LinkItem = tw.div`
  py-2 no-underline hover:underline hover:underline-offset-4 decoration-[#54c8e8] decoration-[4px]
`

const LinkText = tw.span`
  text-slate-700 font-bold hover:text-white transition-all duration-200
`

const TertiaryContent = tw.div`
  grid grid-cols-3 items-center justify-center md:justify-center md:items-center h-[100px] p-3 border-0 
`

const Block = tw.div`
  flex flex-col mb-6
`

const Title = tw.h3`
  font-bold text-foreground text-lg
`

const Subtext = tw.p`
  text-sm text-slate-400
`

const FooterContainer = tw.div`
	py-16 bg-secondary-foreground w-full flex flex-col items-center justify-center px-6
`

const FooterText = tw.h5`
	text-slate-600 font-bold text-center
`

type BlockItemProps = {
	title: string
	subtext: string
}

const BlockItem = ({ title, subtext }: BlockItemProps) => (
	<Block>
		<Title>{title}</Title>
		<Subtext>{subtext}</Subtext>
	</Block>
)

export {
	FooterContainer,
	FooterText,
	GridContainer,
	LinkItem,
	LinkText,
	PrimaryContent,
	PrimaryDetails,
	SecondaryContent,
	TertiaryContent,
	BlockItem,
}
