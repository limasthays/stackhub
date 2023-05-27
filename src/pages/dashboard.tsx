import { Button } from '@/components/ui/form-components/Button'
import { api } from '@/services/axiosClient'
import { useRouter } from 'next/router'
import { parseCookies, destroyCookie } from 'nookies'
import { Suspense, useEffect, useState } from 'react'

export default function DashboardPage(props: any) {
	const router = useRouter()
	const [userContent, setUserContent] = useState<any>()
	const [isUserAuth, setIsUserAuth] = useState<boolean>(false)

	useEffect(() => {
		if (props.TOKEN_KENZIE_HUB && props.ID_KENZIE_HUB) {
			setIsUserAuth(true)
			const parsedId = JSON.parse(props.ID_KENZIE_HUB)
			api
				.get(`users/${parsedId}`)
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

	return (
		isUserAuth && (
			<div>
				<Suspense
					fallback={
						<>
							<p className="text-white">carregando...</p>
						</>
					}
				>
					<p>oie! {userContent?.name}</p>

					<div className="w-1/3">
						<Button
							title="Sair"
							variant="primary"
							onClick={() => {
								destroyCookie(null, 'TOKEN_KENZIE_HUB')
								destroyCookie(null, 'ID_KENZIE_HUB')
								router.push('/')
							}}
						/>
					</div>
				</Suspense>
			</div>
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
