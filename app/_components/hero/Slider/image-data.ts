type ImageData = {
	id: number
	name: string
	serviceType: string
	stars: number
	image: string
}

export const images: ImageData[] = [
	{
		id: 0,
		name: 'Ella',
		serviceType: 'Wedding Planner',
		stars: 746,
		image: '/phones/phone-v2.webp',
	},

	{
		id: 1,
		name: 'Olivia P',
		serviceType: 'Bookkeeper',
		stars: 567,
		image: '/phones/phone-v3.webp',
	},
	{
		id: 2,
		name: 'Sonia B',
		serviceType: 'Property Consultant',
		stars: 933,
		image: '/phones/phone-v4.webp',
	},
	{
		id: 3,
		name: 'Jen',
		serviceType: 'Math Tutor',
		stars: 493,
		image: '/phones/phone-v5.webp',
	},
	{
		id: 4,
		name: 'Marie',
		serviceType: 'Running Instructor',
		stars: 901,
		image: '/phones/phone-v6.webp',
	},
]
