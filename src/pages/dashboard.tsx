/* eslint-disable react-hooks/exhaustive-deps */
import { DashboardContent } from '@/dashboard/layouts/DashboardContent'
import { api } from '@/services/axiosClient'
import { useRouter } from 'next/router'
import { parseCookies, destroyCookie } from 'nookies'
import { Suspense, useEffect, useState } from 'react'

export type UserData = {
	avatar_url: string | null
	bio: string
	contact: string
	course_module: string
	email: string
	id: string
	name: string
	techs: any
	works: any
}

export default function DashboardPage(props: any) {
	const router = useRouter()
	const [userContent, setUserContent] = useState<UserData>()
	const [isUserAuth, setIsUserAuth] = useState<boolean>(false)

	useEffect(() => {
		if (props.TOKEN_KENZIE_HUB && props.ID_KENZIE_HUB) {
			setIsUserAuth(true)
			const parsedId = JSON.parse(props.ID_KENZIE_HUB)
			api
				.get<UserData>(`users/${parsedId}`)
				.then((response) => {
					setUserContent(response.data)
				})
				.catch((err) => {
					console.error('deu ruim: ', err)
				})
		} else {
			router.push('/login')
		}
	}, [])

	return isUserAuth && <DashboardContent data={userContent} />
}

export async function getServerSideProps(context: any) {
	const cookies = parseCookies(context)
	return {
		props: {
			TOKEN_KENZIE_HUB: cookies.TOKEN_KENZIE_HUB || null,
			ID_KENZIE_HUB: cookies.ID_KENZIE_HUB || null,
		},
	}
}
