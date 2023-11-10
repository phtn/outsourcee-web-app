type FeatureProps = {
	headerProps: FeatureHeaderProps
	features: FeatureItemProps[]
}
type FeatureHeaderProps = {
	tag: string
	title: string
}

type FeatureItemProps = {
	description: string
	id: number
	title: string
	src: string
}

export type { FeatureProps, FeatureHeaderProps, FeatureItemProps }
