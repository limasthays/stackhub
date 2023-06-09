import { ModalContainer } from '@/components/modals/ModalContainer'
import { Button } from '@/components/ui/form-components/Button'
import { Input } from '@/components/ui/form-components/Input'
import { Label } from '@/components/ui/form-components/Label'
import { Select } from '@/components/ui/form-components/Select'
import { DashboardContentContext } from '@/dashboard/contexts/DashboardContext'
import { api } from '@/services/axiosClient'
import { parseCookies } from 'nookies'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

type IncludeTechModalProps = {
	onClose: () => void
}

export function IncludeTechModal({ onClose }: IncludeTechModalProps) {
	const { setUserData } = useContext(DashboardContentContext)
	const { register, handleSubmit } = useForm()

	const cookies = parseCookies()
	const token = JSON.parse(cookies.TOKEN_KENZIE_HUB)

	const handleSubmitData = (values: any) => {
		api
			.post('/users/techs', values, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(({ data }) => {
				setUserData((prevState) => {
					return { ...prevState, techs: [...prevState.techs, data] }
				})

				onClose()
			})
			.catch((err) => {
				console.error(err)
			})
	}

	const statusOptions = [
		{ value: 'Iniciante', title: 'Iniciante' },
		{ value: 'Intermediário', title: 'Intermediário' },
		{ value: 'Avançado', title: 'Avançado' },
	]

	return (
		<ModalContainer title="Cadastrar tecnologia" onClose={onClose}>
			<div className="bg-neutral-800 rounded-b p-4">
				<form
					className=" flex flex-col gap-4"
					onSubmit={handleSubmit(handleSubmitData)}
				>
					<div>
						<Label title="Nome da tecnologia" htmlFor="title" />
						<Input type="text" {...register('title')} id="title" />
					</div>
					<div>
						<Label title="Status da tecnologia" htmlFor="status" />
						<Select
							options={statusOptions}
							id="status"
							{...register('status')}
						/>
					</div>

					<Button type="submit" title="Cadastrar tech" variant="primary" />
				</form>
			</div>
		</ModalContainer>
	)
}
