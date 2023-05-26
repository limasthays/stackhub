import { Button } from '../ui/form-components/Button'
import { Input } from '../ui/form-components/Input'
import { Label } from '../ui/form-components/Label'
import { Select } from '../ui/form-components/Select'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export function SignupForm() {
	const signupFormSchema = yup.object().shape({
		name: yup.string().required('*Preencha seu nome'),
		email: yup.string().required('*Preencha seu email').email('Email inválido'),
		password: yup
			.string()
			.required('*Preencha sua senha')
			.min(6, 'A senha precisa ter no mínimo 6 caracteres'),
		confirmPassword: yup
			.string()
			.required('As senhas precisam ser iguais')
			.oneOf([yup.ref('password')], 'As senhas precisam ser iguais'),
		bio: yup.string().required('*Escreva uma bio').max(140),
		course_module: yup.string().required('Escolha o módulo em que você está'),
		contact: yup.string().required('*Preencha o campo de contato'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(signupFormSchema) })

	const onSubmitCallback = (valores: any) => {
		console.log('submited values: ', valores)
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

	console.log('erros: ', errors.name)

	return (
		<form
			className="flex flex-col gap-4 w-[90%]"
			onSubmit={handleSubmit(onSubmitCallback)}
			autoComplete="off"
		>
			<div>
				<Label title="Nome" htmlFor="name" />
				<Input {...register('name')} type="text" id="name" />
				{/* <span>{errors.name?.message?.toString()}</span>
				 * incluir mensagens de erro depois
				 */}
			</div>

			<div>
				<Label title="Email" htmlFor="email" />
				<Input {...register('email')} type="email" id="email" />
			</div>

			<div>
				<Label title="Senha" htmlFor="password" />
				<Input {...register('password')} type="password" id="password" />
			</div>

			<div>
				<Label title="Confirme sua senha" htmlFor="confirmPassword" />
				<Input
					{...register('confirmPassword')}
					type="password"
					id="confirmPassword"
				/>
			</div>

			<div>
				<Label title="Selecionar modulo" htmlFor="course_module" />
				<Select
					{...register('course_module')}
					options={courseModuleOptions}
					id="course_module"
				/>
			</div>

			<div>
				<Label title="Bio" htmlFor="bio" />
				<Input
					placeholder="Escreva um pouco sobre você"
					{...register('bio')}
					id="bio"
				/>
			</div>
			<div>
				<Label title="Contato" htmlFor="contact" />
				<Input
					type="text"
					placeholder="Opção de contato"
					{...register('contact')}
					id="contact"
				/>
			</div>

			<Button title="Cadastrar!" variant="primary" type="submit" />
		</form>
	)
}
