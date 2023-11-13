import tw from 'tailwind-styled-components'

const HeaderContainer = tw.div`
  w-full h-fit flex items-center justify-start
`

const HeaderContent = tw.div`
  w-fit flex flex-col items-start justify-center h-full
`

const TagContainer = tw.div`
  bg-primary-foreground h-fit px-3 py-[2px] 
  flex items-center justify-center rounded-[2px]
  shadow-xl shadow-[#54c8e8]/30
`

const TagLabel = tw.h2`
  text-white font-extrabold text-[0.64rem] 
  uppercase tracking-[2.5px] py-1
`

const TitleContainer = tw.div`
  h-fit py-2
`

const HeaderTitle = tw.h2`
	text-[2rem] sm:text-[2.5rem] font-bold leading-[24px] sm:leading-10
`

const HeaderSeparator = tw.div`
  w-[320px] border-b-8 border-secondary-foreground/70
`
const DetailsContainer = tw.div`
	flex h-[48px] items-center justify-between
`

const InfoStack = tw.div`
	ml-4 sm:ml-6
`

const Stack = tw.div`
	flex items-center justify-start
`

const Star = tw.div`
	h-4 w-4 md:h-5 md:w-5 bg-[url('/icons/star-icon.svg')] bg-contain bg-no-repeat mr-1
`

const Rating = tw.span`
	text-muted-foreground sm:text-[1rem] lg:text-[1.25rem] font-bold
`

const Reviews = tw.span`
	text-slate-400 text-xs font-light
`

const SubtextContainer = tw.div`
	mt-1 sm:mt-2
`

const SubtextContent = tw.span`
	border-l-4 border-secondary-foreground px-2 py-1 text-xs sm:text-sm text-primary-foreground font-semibold tracking-wide
`

type HeaderProps = {
	reviews: number
	rating: string
	tag: string
	title: string
	subtext: string
}

const Tag = ({ tag }: Pick<HeaderProps, 'tag'>) => (
	<TagContainer>
		<TagLabel>{tag}</TagLabel>
	</TagContainer>
)

const Subtext = ({ subtext }: Pick<HeaderProps, 'subtext'>) => (
	<SubtextContainer>
		<SubtextContent>{subtext}</SubtextContent>
	</SubtextContainer>
)

const Details = ({ title, rating, reviews }: Partial<HeaderProps>) => (
	<DetailsContainer>
		<HeaderTitle>{title}</HeaderTitle>
		<InfoStack>
			<Stack>
				<Star />
				<Rating>{rating}</Rating>
			</Stack>
			<Stack>
				<Reviews>{reviews} reviews</Reviews>
			</Stack>
		</InfoStack>
	</DetailsContainer>
)

const Header = ({ rating, reviews, subtext, tag, title }: HeaderProps) => (
	<HeaderContainer>
		<HeaderContent>
			<Tag tag={tag} />
			<TitleContainer>
				<Details
					title={title}
					rating={rating}
					reviews={reviews}
				/>
				<Subtext subtext={subtext} />
			</TitleContainer>
		</HeaderContent>
	</HeaderContainer>
)

export { Header }
