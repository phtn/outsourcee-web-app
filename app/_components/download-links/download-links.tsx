import { motion } from 'framer-motion'
import { GridContainer, Item } from './styled'
import { Button } from '@/components/ui/button'
import { Link } from './types'
import { toast } from 'sonner'

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

const playStoreRedirect = () => {}

const DownloadLinks = () => {
	const toaster = (title: string) => () => {
		switch (title) {
			case 'app-store':
				return toast('Optimization Maintenance', {
					description: 'New build will be released shortly. ',
				})
			case 'play-store':
				return toast('New Release Available.', {
					description: 'Google Play Store',
					action: {
						label: 'Download',
						onClick: () =>
							(location.href =
								'https://play.google.com/store/apps/details?id=com.comptrolla.outsourcing'),
					},
				})
			case 'app-gallery':
				return toast('Under Development', {
					description: 'Check back in a bit for updates.',
				})
		}
	}

	return (
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
								onClick={toaster(item.title)}
								variant={'ghost'}
								className={`${image} w-36 h-10 bg-contain bg-no-repeat`}
							/>
						</Item>
					)
				})}
			</GridContainer>
		</motion.div>
	)
}

export default DownloadLinks
