import { Homepage } from '@/components/sections/Homepage'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'

export default function Home(props: any) {
	const router = useRouter()

	useEffect(() => {
		if (props.TOKEN_KENZIE_HUB && props.ID_KENZIE_HUB) {
			router.push('/dashboard')
		}
	}, [])

	return (
		<>
			<Head>
				<title>Stackhub</title>
			</Head>

			<Homepage />
		</>
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
