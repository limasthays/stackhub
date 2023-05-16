import { Input } from '../ui/form-components/Input'
import { Label } from '../ui/form-components/Label'
import { Select } from '../ui/form-components/Select'

export function SignupForm() {
	return (
		<form className="flex flex-col gap-4 w-[90%]">
			<div>
				<Label title="Nome" htmlFor="name" />
				<Input id="name" />
			</div>

			<div>
				<Label title="Email" htmlFor="email" />
				<Input id="email" type="email" />
			</div>

			<div>
				<Label title="Senha" htmlFor="password" />
				<Input id="password" type="password" />
			</div>

			<div>
				<Label title="Confirme sua senha" htmlFor="confirmPassword" />
				<Input id="confirmPassword" type="password" />
			</div>

			<div>
				<Label title="Selecionar modulo" htmlFor="course_module" />
				<Select
					id="course_module"
					options={[
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
					]}
				/>
			</div>
		</form>
	)
}
