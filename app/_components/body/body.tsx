'use client'
import Landing from '../landing/landing'
import { BodyContainer } from './styled'
import { Grid } from '../motion/grid'

const Body = () => (
	<BodyContainer>
		<Grid />
		<Landing />
	</BodyContainer>
)

export default Body
