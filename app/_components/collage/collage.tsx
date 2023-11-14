import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import { Header, HeaderGap } from '../header'

const Collage = () => (
	<div className='mb-24'>
		<Header
			tag='explore'
			title='Top Services'
		/>
		<HeaderGap />
		<div className='md:grid md:grid-cols-2'>
			<Primary />
			<Secondary />
		</div>
	</div>
)

const Primary = () => (
	<div className='grid grid-rows-3 mb-16'>
		<div className='flex w-full justify-center items-center'>
			<Medium src={`bg-[url('/services/wellness.svg')]`} />
			<Small src={`bg-[url('/services/cleaner.svg')]`} />
		</div>
		<div className='flex w-full justify-center items-start'>
			<Small src={`bg-[url('/services/carpenter.svg')]`} />
			<Medium src={`bg-[url('/services/tech.svg')]`} />
			<Big src={`bg-[url('/services/bookkeeper.svg')]`} />
		</div>
		<div className='flex w-full justify-center items-start'>
			<Big src={`bg-[url('/services/landscape.svg')]`} />
			<Small src={`bg-[url('/services/plumber.svg')]`} />
			<MediumPadding />
		</div>
	</div>
)

type CarouselProps = {
	image: string
	caption: string
}

const services: CarouselProps[] = [
	{ image: '/services/nail-spa-v1.webp', caption: 'Nail Spa' },
	{ image: '/services/bookkeeping-v2.webp', caption: 'Bookkeeping' },
]

const Secondary = () => (
	<div className='bg-slate-500/50 sm:w-[500px] h-fit sm:rounded-3xl overflow-hidden'>
		<Carousel
			className='md:w-fit'
			keyboard={true}
			pause='hover'
			variant='dark'>
			{services.map((item) => (
				<Carousel.Item
					key={item.caption}
					className='flex items-center justify-center'>
					<CarouselItem
						image={item.image}
						caption={item.caption}
					/>
				</Carousel.Item>
			))}
		</Carousel>
	</div>
)

const CarouselItem = ({ image, caption }: CarouselProps) => (
	<>
		<Image
			alt=''
			src={image}
			height={500}
			width={500}
			className='h-[300px] sm:h-[400px]'
		/>
		<Caption caption={caption} />
	</>
)

const Caption = ({ caption }: { caption: string }) => (
	<Carousel.Caption>
		<h3 className='bg-black/50 p-3 rounded-xl text-white font-extrabold text-sm '>
			{caption}
		</h3>
	</Carousel.Caption>
)

const small = `h-16 w-16 rounded-full flex items-center justify-center mx-2 bg-white shadow-xl shadow-[#54c8e8]/20`
const medium = `h-24 w-24 rounded-full flex items-center justify-center mx-2 bg-white shadow-xl shadow-[#54c8e8]/20`
const big = `relative top-[-24px] h-32 w-32 rounded-full flex items-center justify-center mx-2 bg-white shadow-xl shadow-[#54c8e8]/20`

const Small = ({ src }: { src: string }) => (
	<div className={small}>
		<div className={`${src} bg-contain h-12 w-12`} />
	</div>
)

const Medium = ({ src }: { src: string }) => (
	<div className={medium}>
		<div className={`${src} bg-contain h-16 w-16`} />
	</div>
)

const Big = ({ src }: { src: string }) => (
	<div className={big}>
		<div className={`${src} bg-contain h-24 w-24`} />
	</div>
)

const MediumPadding = () => (
	<div className='h-24 w-24 rounded-full flex items-center justify-center mx-3'></div>
)

export default Collage
