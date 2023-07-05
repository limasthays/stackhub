import { useForm } from 'react-hook-form'
import { Button } from '../ui/form-components/Button'
import { Input } from '../ui/form-components/Input'
import { Label } from '../ui/form-components/Label'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '@/services/axiosClient'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { ErrorMessage } from '../ui/form-components/ErrorMessage'

export function LoginForm() {
	const router = useRouter()

	const formSchemaLogin = yup.object().shape({
		email: yup.string().required('Email obrigatório').email('Email inválido'),
		password: yup.string().required('Senha obrigatória'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		setError,
	} = useForm({ resolver: yupResolver(formSchemaLogin), criteriaMode: 'all' })

	const handleLoginResponse = (response: any) => {
		const token = response.data.token
		setCookie(null, 'TOKEN_KENZIE_HUB', JSON.stringify(token), {
			maxAge: 86400,
			path: '/',
		})

		const id = response.data.user.id
		setCookie(null, 'ID_KENZIE_HUB', JSON.stringify(id), {
			maxAge: 86400,
			path: '/',
		})

		router.push('/dashboard')
	}

	const onSubmitCallback = (values: any) => {
		api
			.post('/sessions', values)
			.then((response) => {
				handleLoginResponse(response)
				toast.success('Seu login deu certo! :)')
			})
			.catch((error) => {
				toast.error('Algo deu errado... :(')

				if (error.response.status === 401) {
					setError('incorrect_combination', {
						message:
							'Email ou senha incorretos. Confira seus dados e tente novamente.',
					})
				}
			})
	}

	return (
		<form
			className="flex flex-col gap-4 w-[90%]"
			autoComplete="new-password"
			onSubmit={handleSubmit(onSubmitCallback)}
		>
			<div>
				<Label title="Email" htmlFor="email" />
				<Input {...register('email')} type="email" id="email" />

				{errors?.email && (
					<ErrorMessage>{errors?.email?.message as string}</ErrorMessage>
				)}
			</div>

			<div>
				<Label title="Senha" htmlFor="password" />
				<Input {...register('password')} type="password" id="password" />
				{errors?.password && (
					<ErrorMessage>{errors?.password?.message as string} </ErrorMessage>
				)}
				{errors?.incorrect_combination && (
					<ErrorMessage>
						{errors?.incorrect_combination?.message as string}
					</ErrorMessage>
				)}
			</div>

			<Button
				title="Entrar"
				variant="primary"
				type="submit"
				disabled={!isValid}
			/>
		</form>
	)
}
