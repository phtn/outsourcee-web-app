import DownloadLinks from '../download-links'
import { Header, HeaderGap } from '../header'
import {
	Col,
	GridContainer,
	Headline,
	LinksContainer,
	PhoneBig,
	PhoneSmall,
	PrimaryContent,
	Row,
	Subtext,
} from './styled'

const PostScript = () => (
	<div>
		<Header
			tag='downloads'
			title='Mobile App'
		/>
		<HeaderGap />
		<GridContainer>
			<Primary />
			<Secondary />
		</GridContainer>
	</div>
)

const Primary = () => (
	<PrimaryContent>
		<Headline>Download the app.</Headline>
		<Subtext>
			Available on the Apple App Store, Google Play Store, and Huawei App
			Gallery.
		</Subtext>
		<div className='w-full flex mt-10'>
			<LinksContainer>
				<DownloadLinks />
			</LinksContainer>
		</div>
	</PrimaryContent>
)

const Secondary = () => (
	<Col>
		<Row>
			<PhoneSmall
				alt=''
				src='/phones/ss-center.png'
				height={400}
				width={400}
			/>
			<PhoneBig
				alt=''
				src='/phones/ss-center.png'
				height={400}
				width={400}
			/>
			<PhoneSmall
				alt=''
				src='/phones/ss-center.png'
				height={400}
				width={400}
			/>
		</Row>
	</Col>
)

export default PostScript
