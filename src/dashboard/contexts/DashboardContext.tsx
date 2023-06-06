import React, { createContext, useEffect, useState } from 'react'
import { UserData } from '../types/types'
import { parseCookies } from 'nookies'
import { api } from '@/services/axiosClient'

type DashboardContentProps = {
	userData?: UserData
}

export const DashboardContentContext = createContext<DashboardContentProps>(
	{} as DashboardContentProps
)

export function DashboardContentProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [userData, setUserData] = useState<UserData>()
	const cookies = parseCookies()

	useEffect(() => {
		if (cookies.TOKEN_KENZIE_HUB && cookies.ID_KENZIE_HUB) {
			const parsedId = JSON.parse(cookies.ID_KENZIE_HUB)

			api
				.get<UserData>(`users/${parsedId}`)
				.then((response) => {
					setUserData(response.data)
				})
				.catch((error) => {
					console.error('algo deu errado: ', error)
				})
		}
	}, [])

	return (
		<DashboardContentContext.Provider value={{ userData }}>
			{children}
		</DashboardContentContext.Provider>
	)
}
