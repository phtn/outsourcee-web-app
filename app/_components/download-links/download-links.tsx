import { motion } from 'framer-motion'
import { GridContainer, Item } from './styled'
import { Button } from '@/components/ui/button'
import { Link } from './types'

const stores: Link[] = [
	{
		title: 'app-store',
		image: `bg-[url('/images/app-store-v4.png')]`,
		link: '/app-store',
	},
	{
		title: 'play-store',
		image: `bg-[url('/images/play-store-v4.png')]`,
		link: '/play-store',
	},
	{
		title: 'app-gallery',
		image: `bg-[url('/images/app-gallery-v4.png')]`,
		link: '/app-gallery',
	},
]

const DownloadLinks = () => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.2, delay: 2.0 }}>
		<GridContainer>
			{stores.map((item, index) => {
				const image = item.image
				return (
					<Item key={item.link}>
						<Button
							variant={'ghost'}
							className={`${image} w-36 h-10 bg-contain bg-no-repeat`}
						/>
					</Item>
				)
			})}
		</GridContainer>
	</motion.div>
)

export default DownloadLinks
