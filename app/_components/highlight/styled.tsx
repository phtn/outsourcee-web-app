import tw from 'tailwind-styled-components'

const Container = tw.div`
  h-[750px] w-full flex flex-col md:grid md:grid-cols-2
`

const HeaderContainer = tw.div`
  w-full h-fit flex items-center justify-start
`

const HeaderContent = tw.div`
  w-fit flex flex-col items-start justify-center h-full
`

const HeaderTagContainer = tw.div`
  bg-primary-foreground h-fit w-[150px] px-3 py-[2px] 
  flex items-center justify-center rounded-[2px]
  shadow-xl shadow-[#54c8e8]/30
`

const HeaderTag = tw.h2`
  text-white font-extrabold text-[0.64rem] 
  uppercase tracking-[2.5px] py-1
`

const HeaderTitleContainer = tw.div`
  h-[100px] flex items-center justify-center
`

const HeaderTitle = tw.h2`
  text-[2.5rem] font-medium leading-[28px]
`

const HeaderSeparator = tw.div`
  w-[320px] border-b-8 border-secondary-foreground/70
`

type HeaderProps = {
	tag: string
	title: string
}

const Header = ({ tag, title }: HeaderProps) => (
	<HeaderContainer>
		<HeaderContent>
			<HeaderTagContainer>
				<HeaderTag>{tag}</HeaderTag>
			</HeaderTagContainer>
			<HeaderTitleContainer>
				<div className=''>
					<span className='text-muted-foreground text-sm mx-2 font-light bg-foreground/5 px-2 rounded-md'>
						Meet
					</span>
					<HeaderTitle>{title}</HeaderTitle>
				</div>
			</HeaderTitleContainer>
			{/* <HeaderSeparator /> */}
		</HeaderContent>
	</HeaderContainer>
)

const HeaderGap = tw.div`
  h-[75px]
`

export { Container, Header }
