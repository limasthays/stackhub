import { LoginSection } from '@/components/sections/LoginSection'
import { HomepageHeading } from '@/components/ui/HomepageHeading'
import Head from 'next/head'

export default function Login() {
	return (
		<>
			<Head>
				<title>Login :)</title>
			</Head>

			<main className="flex flex-col items-center py-12 px-6">
				<HomepageHeading />
				<LoginSection />
			</main>
		</>
	)
}
