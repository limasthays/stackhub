import { useRouter } from 'next/router'

export function HomepageHeader() {
	const router = useRouter()

	return (
		<h1
			onClick={() => {
				router.push('/')
			}}
			className="cursor-pointer"
		>
			stackhub
		</h1>
	)
}
