import Link from 'next/link'
import {
	DownloadPanel,
	DownloadTitle,
	StoreImage,
	StoreLink,
	StorePanel,
	Subtext,
} from './styled'

type LinkType = {
	title: string
	image: string
	link: string
}

const links: LinkType[] = [
	{
		title: 'app-store',
		image: `/images/app-store-v4.png`,
		link: '/',
	},
	{
		title: 'play-store',
		image: `/images/play-store-v4.png`,
		link: '/',
	},
	{
		title: 'app-gallery',
		image: `/images/app-gallery-v4.png`,
		link: '/',
	},
]

const DownloadLinks = () => (
	<DownloadPanel>
		<DownloadTitle>Download the app.</DownloadTitle>
		<Subtext>
			<div className='skew-x-[16deg]'>
				<span className='md:text-[16px] font-medium text-center leading-snug text-xs text-zinc-500 dark:text-gray-300 '>
					Now available on iOS, Android and HarmonyOS.
				</span>
			</div>
		</Subtext>

		<StorePanel>
			{links.map((item) => (
				<Link
					key={item.title}
					href={item.link}>
					<LinkItem image={item.image} />
				</Link>
			))}
		</StorePanel>
	</DownloadPanel>
)

const LinkItem = ({ image }: { image: string }) => (
	<StoreLink>
		<StoreImage
			alt=''
			src={image}
			width={400}
			height={400}
		/>
	</StoreLink>
)

export default DownloadLinks
