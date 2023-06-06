/* eslint-disable react-hooks/exhaustive-deps */
import { DashboardContent } from '@/dashboard/layouts/DashboardContent'
import { api } from '@/services/axiosClient'
import { useRouter } from 'next/router'
import { parseCookies, destroyCookie } from 'nookies'
import { Suspense, useContext, useEffect, useState } from 'react'
import { UserData } from '@/dashboard/types/types'
import { DashboardContentProvider } from '@/dashboard/contexts/DashboardContext'

export default function DashboardPage(props: any) {
	const router = useRouter()
	const [isUserAuth, setIsUserAuth] = useState<boolean>(false)

	useEffect(() => {
		if (props.TOKEN_KENZIE_HUB && props.ID_KENZIE_HUB) {
			setIsUserAuth(true)
		} else {
			router.push('/login')
		}
	}, [])

	return (
		isUserAuth && (
			<DashboardContentProvider>
				<DashboardContent />
			</DashboardContentProvider>
		)
	)
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
