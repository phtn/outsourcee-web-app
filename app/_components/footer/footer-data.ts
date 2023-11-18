export type KeyValue = {
	title: string
	subtext: string
}

export type ListProps = {
	array: KeyValue[]
}

export const howItWorks: KeyValue[] = [
	{
		title: 'Application Form',
		subtext: 'Fill out the application form and provide valid identification.',
	},
	{
		title: 'Skills Assessment',
		subtext:
			'Assess your skills to understand your strengths and ensure a personalized experience on our platform.',
	},
	{
		title: 'Training & Orientation',
		subtext:
			'Embark on app orientation for in-depth knowledge of effective navigation and secure work practices. Engage in ongoing training to enhance professionalism and client interaction skills.',
	},
	{
		title: 'Onboarding Completion',
		subtext:
			'As we conclude your onboarding, you can now seamlessly explore your job opportunities and start earning already.',
	},
]

export const requirements: KeyValue[] = [
	{
		title: 'Resume',
		subtext: `A document outlining an individual's education, work experience, skills, and qualifications.`,
	},
	{
		title: 'Diploma/TOR',
		subtext:
			'A certified copy of the diploma or transcript of records verifying the completion of an educational program.',
	},
	{
		title: 'Certifications',
		subtext:
			'Proof of specialized qualifications or certifications and trainings relevant to bookkeeping. Not Required.',
	},
	{
		title: 'NBI Clearance',
		subtext:
			'A document issued by the National Bureau of Investigation (NBI) certifying the absence of any criminal record.',
	},

	{
		title: `2 Copies of Gov't Issued IDs`,
		subtext: `Photocopies of two government-issued identification cards for identity verification purposes (Ex: SSS, TIN, Passport, Driver’s License, Postal ID)`,
	},
	{
		title: 'Vaccination Card',
		subtext: 'Proof of vaccination against Covid-19.',
	},
	{
		title: 'Fit-to-Work Medical Clearance',
		subtext:
			'A medical certificate confirming that an individual is physically and mentally fit to perform the job duties.',
	},
	{
		title: '2 Character References',
		subtext: `Contact information of individuals who can vouch for the bookkeeper's character and provide references for a background check.`,
	},
]
