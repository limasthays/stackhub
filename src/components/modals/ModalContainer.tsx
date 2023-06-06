import { useForm } from 'react-hook-form'
import { Input } from '../ui/form-components/Input'
import { Label } from '../ui/form-components/Label'
import { Select } from '../ui/form-components/Select'
import { Button } from '../ui/form-components/Button'

export function ModalContainer() {
	const { register } = useForm()

	const statusOptions = [
		{ value: 'Iniciante', title: 'Iniciante' },
		{ value: 'Intermediário', title: 'Intermediário' },
		{ value: 'Avançado', title: 'Avançado' },
	]

	return (
		<div className="bg-neutral-900/50 absolute top-0 left-0 w-full h-full flex items-center justify-center">
			<section className="md:w-1/2">
				<div className="flex justify-between items-center bg-neutral-700 px-4 rounded-t">
					<span>cadastrar tecnologia</span>
					<button className="rounded p-2 font-bold bg-neutral-700">x</button>
				</div>

				<div className="bg-neutral-800 rounded-b p-4">
					<form className=" flex flex-col gap-4">
						<div>
							<Label title="Nome da tecnologia" htmlFor="title" />
							<Input type="text" {...register('title')} id="title" />
						</div>
						<div>
							<Label title="Status da tecnologia" htmlFor="status" />
							<Select options={statusOptions} name="status" id="status" />
						</div>

						<Button type="submit" title="Cadastrar tech" variant="primary" />
					</form>
				</div>
			</section>
		</div>
	)
}
