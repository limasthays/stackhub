import { SignupForm } from '@/components/forms/SignupForm'
import AuthenticationLayout from '@/components/layouts/AuthenticationLayout'
import { AuthFormContainer } from '@/components/ui/form-components/AuthFormContainer'

export default function Signup() {
	return (
		<>
			<AuthenticationLayout title="Cadastre-se">
				<AuthFormContainer authTitle="Crie sua conta">
					<SignupForm />
				</AuthFormContainer>
			</AuthenticationLayout>
		</>
	)
}
