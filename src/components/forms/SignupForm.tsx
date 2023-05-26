import { Button } from '../ui/form-components/Button'
import { Input } from '../ui/form-components/Input'
import { Label } from '../ui/form-components/Label'
import { Select } from '../ui/form-components/Select'
import { useForm } from 'react-hook-form'

export function SignupForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

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

	return (
		<form
			className="flex flex-col gap-4 w-[90%]"
			onSubmit={handleSubmit(onSubmitCallback)}
		>
			<div>
				<Label title="Nome" htmlFor="name" />
				<Input {...register('name')} type="text" />
			</div>

			<div>
				<Label title="Email" htmlFor="email" />
				<Input {...register('email')} type="email" />
			</div>

			<div>
				<Label title="Senha" htmlFor="password" />
				<Input {...register('password')} type="password" />
			</div>

			<div>
				<Label title="Confirme sua senha" htmlFor="confirmPassword" />
				<Input {...register('confirmPassword')} type="password" />
			</div>

			<div>
				<Label title="Selecionar modulo" htmlFor="course_module" />
				<Select {...register('course_module')} options={courseModuleOptions} />
			</div>

			<div>
				<Label title="Bio" htmlFor="bio" />
				<Input placeholder="Escreva um pouco sobre você" {...register('bio')} />
			</div>
			<div>
				<Label title="Contato" htmlFor="contact" />
				<Input
					type="text"
					placeholder="Opção de contato"
					{...register('contact')}
				/>
			</div>

			<Button title="Cadastrar!" variant="primary" type="submit" />
		</form>
	)
}
