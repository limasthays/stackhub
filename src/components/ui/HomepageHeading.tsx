import { useRouter } from 'next/router'

export function HomepageHeading() {
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
