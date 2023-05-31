import { destroyCookie } from 'nookies'
import { Button } from './form-components/Button'
import { useRouter } from 'next/router'

function LogoutButton() {
	const router = useRouter()

	return (
		<Button
			title="Sair"
			variant="primary"
			size="sm"
			onClick={() => {
				destroyCookie(null, 'TOKEN_KENZIE_HUB')
				destroyCookie(null, 'ID_KENZIE_HUB')
				router.push('/')
			}}
		/>
	)
}

export default LogoutButton
