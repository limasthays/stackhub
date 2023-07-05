import { Button } from '../ui/form-components/Button'
import { Input } from '../ui/form-components/Input'
import { Label } from '../ui/form-components/Label'
import { Select } from '../ui/form-components/Select'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '@/services/axiosClient'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { ErrorMessage } from '../ui/form-components/ErrorMessage'

export function SignupForm() {
	const router = useRouter()

	const signupFormSchema = yup.object().shape({
		name: yup.string().required('*Preencha seu nome'),
		email: yup.string().required('*Preencha seu email').email('Email inválido'),
		password: yup
			.string()
			.required('*Preencha sua senha')
			.min(6, '*A senha precisa ter no mínimo 6 caracteres'),
		confirmPassword: yup
			.string()
			.required('*Confirme sua senha')
			.oneOf([yup.ref('password')], '*As senhas precisam ser iguais'),
		bio: yup.string().required('*Escreva uma bio').max(140),
		course_module: yup.string().required('*Escolha o módulo em que você está'),
		contact: yup.string().required('*Preencha o campo de contato'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(signupFormSchema) })

	const onSubmitCallback = (values: any) => {
		api
			.post('users', values)
			.then((response) => {
				toast.success('Conta criada com sucesso! Faça seu login.')
				router.push('/login')
			})
			.catch((error) => {
				console.error('Erro:', error)
				toast.error('Opa! Algo deu errado.')
			})
	}

	const courseModuleOptions = [
		{
			title: 'Primeiro módulo (Introdução ao Frontend)',
			value: 'Primeiro módulo (Introdução ao Frontend)',
		},
		{
			title: 'Segundo módulo (Frontend Avançado)',
			value: 'Segundo módulo (Frontend Avançado)',
		},
		{
			title: 'Terceiro módulo (Introdução ao Backend)',
			value: 'Terceiro módulo (Introdução ao Backend)',
		},
		{
			title: 'Quarto módulo (Backend Avançado)',
			value: 'Quarto módulo (Backend Avançado)',
		},
	]

	return (
		<form
			className="flex flex-col gap-4 w-[90%]"
			onSubmit={handleSubmit(onSubmitCallback)}
			autoComplete="off"
		>
			<div>
				<Label title="Nome" htmlFor="name" />
				<Input {...register('name')} type="text" id="name" />
				{errors.name && (
					<ErrorMessage>{errors.name?.message?.toString()}</ErrorMessage>
				)}
			</div>

			<div>
				<Label title="Email" htmlFor="email" />
				<Input {...register('email')} type="email" id="email" />
				{errors.email && (
					<ErrorMessage>{errors.email?.message?.toString()}</ErrorMessage>
				)}
			</div>

			<div>
				<Label title="Senha" htmlFor="password" />
				<Input {...register('password')} type="password" id="password" />
				{errors.password && (
					<ErrorMessage>{errors.password?.message?.toString()}</ErrorMessage>
				)}
			</div>

			<div>
				<Label title="Confirme sua senha" htmlFor="confirmPassword" />
				<Input
					{...register('confirmPassword')}
					type="password"
					id="confirmPassword"
				/>
				{errors.confirmPassword && (
					<ErrorMessage>
						{errors.confirmPassword?.message?.toString()}
					</ErrorMessage>
				)}
			</div>

			<div>
				<Label title="Selecionar modulo" htmlFor="course_module" />
				<Select
					{...register('course_module')}
					options={courseModuleOptions}
					id="course_module"
				/>
				{errors.course_module && (
					<ErrorMessage>
						{errors.course_module?.message?.toString()}
					</ErrorMessage>
				)}
			</div>

			<div>
				<Label title="Bio" htmlFor="bio" />
				<Input
					placeholder="Escreva um pouco sobre você"
					{...register('bio')}
					id="bio"
				/>
				{errors.bio && (
					<ErrorMessage>{errors.bio?.message?.toString()}</ErrorMessage>
				)}
			</div>
			<div>
				<Label title="Contato" htmlFor="contact" />
				<Input
					type="text"
					placeholder="Opção de contato"
					{...register('contact')}
					id="contact"
				/>
				{errors.contact && (
					<ErrorMessage>{errors.contact?.message?.toString()}</ErrorMessage>
				)}
			</div>

			<Button
				title="Cadastrar!"
				variant="primary"
				type="submit"
				disabled={Object.keys(errors).length !== 0}
			/>
		</form>
	)
}
