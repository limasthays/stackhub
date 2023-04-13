import { Homepage } from '@/components/sections/Homepage'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Stackhub - homepage :)</title>
			</Head>

			<Homepage />
		</>
	)
}
