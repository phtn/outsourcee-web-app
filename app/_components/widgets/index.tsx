import { Primary, Secondary, Tertiary } from './styled'
import { HeaderProps } from './types'

const PrimaryHeader = (props: HeaderProps) => <Primary {...props} />
const SecondaryHeader = (props: HeaderProps) => <Secondary {...props} />
const TertiaryHeader = (props: HeaderProps) => <Tertiary {...props} />
export { PrimaryHeader, SecondaryHeader, TertiaryHeader }
