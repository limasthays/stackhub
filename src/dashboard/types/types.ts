export type UserData = {
	avatar_url: string | null
	bio: string
	contact: string
	course_module: string
	email: string
	id: string
	name: string
	techs: TechItemProps[]
	works: any
}

export type TechItemProps = {
	title: string
	status: string
	id: string
}