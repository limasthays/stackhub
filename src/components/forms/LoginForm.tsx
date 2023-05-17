import { Button } from '../ui/form-components/Button'
import { Input } from '../ui/form-components/Input'
import { Label } from '../ui/form-components/Label'

export function LoginForm() {
	return (
		<form className="flex flex-col gap-4 w-[90%]">
			<div>
				<Label title="Email" htmlFor="email" />
				<Input type="text" id="email" />
			</div>

			<div>
				<Label title="Senha" htmlFor="password" />
				<Input type="password" id="password" />
			</div>

			<Button title="Entrar" variant="primary" type="submit" />
		</form>
	)
}
