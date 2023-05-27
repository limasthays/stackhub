import { LoginForm } from '@/components/forms/LoginForm'
import AuthenticationLayout from '@/components/layouts/AuthenticationLayout'
import { AuthFormContainer } from '@/components/ui/form-components/AuthFormContainer'
import { Button } from '@/components/ui/form-components/Button'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'

function SignupCallToAction() {
	const router = useRouter()
	return (
		<div className="w-[90%] mt-8 flex flex-col items-center justify-center gap-2">
			<span className="text-sm text-neutral-400 font-semibold">
				Ainda não possui uma conta?
			</span>
			<Button
				title="Cadastre-se"
				variant="secondary"
				onClick={() => {
					router.push('/signup')
				}}
			/>
		</div>
	)
}

export default function Login(props: any) {
	return (
		<>
			<AuthenticationLayout title="Login">
				<AuthFormContainer authTitle="Login">
					<LoginForm />
					<SignupCallToAction />
				</AuthFormContainer>
			</AuthenticationLayout>
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
