import { Button } from '@/components/ui/form-components/Button'
import { Input } from '@/components/ui/form-components/Input'
import { Label } from '@/components/ui/form-components/Label'

export function LoginForm() {
	return (
		<form className="flex flex-col gap-4 items-center">
			<div className="w-full">
				<Label htmlFor="email" title="Email" />
				<Input id="email" type="text" />
			</div>

			<div className="w-full">
				<Label htmlFor="password" title="Senha" className="mt-4" />
				<Input type="password" id="password" />
			</div>

			<Button type="submit" title="Entrar" variant="primary" />
		</form>
	)
}
