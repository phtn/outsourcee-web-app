import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Header, HeaderGap } from '../header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { reviewData } from './reviews-data'
import {
	Container,
	Item,
	ReviewContent,
	Cell,
	Stack,
	TitleContainer,
	ContentContainer,
	AuthorContainer,
	AuthorText,
	ContentText,
	TitleText,
	AuthorContent,
} from './styled'
import { Review } from './types'
import { QuoteIcon } from 'lucide-react'

const Reviews = () => {
	return (
		<Container>
			<Header
				tag='latest'
				title='Customer Reviews'
			/>
			<HeaderGap />
			<ScrollArea>
				<ReviewItems />
				<ScrollBar orientation='horizontal' />
			</ScrollArea>
		</Container>
	)
}

const ReviewItems = () => (
	<ReviewContent>
		{reviewData.map((item) => (
			<Item key={item.id}>
				<Cell>
					<Stack>
						<Stars />
						<Title title={item.title} />
						<Content content={item.content} />
						<Author
							author={item.author}
							avatar={item.avatar}
						/>
					</Stack>
				</Cell>
			</Item>
		))}
	</ReviewContent>
)

const star = `bg-[url('/icons/star-icon.svg')] dark:bg-[url('/icons/star-light-icon.svg')] bg-contain bg-no-repeat h-4 w-4 mr-1.5`
const array = new Array(5).fill(star)

const Stars = () => (
	<div className='flex'>
		{array.map((item, index) => (
			<div
				key={item + index}
				className={item}
			/>
		))}
	</div>
)

const Title = ({ title }: { title: string }) => (
	<TitleContainer>
		<TitleText>{title}</TitleText>
	</TitleContainer>
)

const Content = ({ content }: { content: string }) => (
	<ContentContainer>
		<QuoteIcon className='h-6 w-6 scale-x-[-1] fill-slate-300 stroke-none mr-3 self-start' />
		<ContentText>{content}</ContentText>
		<div className='flex w-full justify-end'>
			<QuoteIcon className='h-6 w-6 fill-slate-300 stroke-none' />
		</div>
	</ContentContainer>
)

const Author = ({ author, avatar }: Pick<Review, 'author' | 'avatar'>) => (
	<AuthorContainer>
		<AuthorContent>
			<Avatar className='mr-3 h-8 w-8'>
				<AvatarImage
					src={avatar}
					alt='@shadcn'
				/>
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<AuthorText>{author}</AuthorText>
		</AuthorContent>
	</AuthorContainer>
)

export default Reviews
