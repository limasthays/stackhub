import Head from 'next/head'
import { HomepageHeader } from '../ui/HomepageHeader'

type AuthenticationLayoutProps = {
	title: string
	children: React.ReactNode
}

function AuthenticationLayout({ title, children }: AuthenticationLayoutProps) {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<main className="flex flex-col items-center py-12">
				<HomepageHeader />
				{children}
			</main>
		</>
	)
}

export default AuthenticationLayout
