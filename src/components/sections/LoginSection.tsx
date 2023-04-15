import { useRouter } from 'next/router'
import { LoginForm } from '../layouts/forms/LoginForm'
import { Button } from '../ui/form-components/Button'

export function LoginSection() {
	const router = useRouter()
	return (
		<div className="rounded bg-neutral-800 px-4 py-8 mt-6 w-full">
			<h3 className="text-neutral-50 font-bold text-center">Login</h3>
			<LoginForm />

			<div className="flex flex-col items-center mt-5 gap-2">
				<span className="text-neutral-50 text-sm">
					Ainda não possui uma conta?
				</span>
				<Button
					type="button"
					title="Cadastre-se"
					variant="secondary"
					onClick={() => {
						router.push('/signup')
					}}
				/>
			</div>
		</div>
	)
}
