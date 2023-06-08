import { ModalContainer } from '@/components/modals/ModalContainer'
import { Button } from '@/components/ui/form-components/Button'
import { Input } from '@/components/ui/form-components/Input'
import { Label } from '@/components/ui/form-components/Label'
import { Select } from '@/components/ui/form-components/Select'
import { useForm } from 'react-hook-form'

type IncludeTechModalProps = {
	onClose: () => void
}

export function IncludeTechModal({ onClose }: IncludeTechModalProps) {
	const { register } = useForm()

	const statusOptions = [
		{ value: 'Iniciante', title: 'Iniciante' },
		{ value: 'Intermediário', title: 'Intermediário' },
		{ value: 'Avançado', title: 'Avançado' },
	]

	return (
		<ModalContainer title="Cadastrar tecnologia" onClose={onClose}>
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
		</ModalContainer>
	)
}
