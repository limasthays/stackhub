import { DashboardContentContext } from '@/dashboard/contexts/DashboardContext'
import { TechItemProps, UserData } from '@/dashboard/types/types'
import { api } from '@/services/axiosClient'
import { parseCookies } from 'nookies'
import { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

function TechItem({ status, title, id }: TechItemProps) {
	const { setUserData, userData } = useContext(DashboardContentContext)
	const cookies = parseCookies()
	const token = JSON.parse(cookies.TOKEN_KENZIE_HUB)

	const handleDeleteTech = () => {
		if (
			confirm(
				'Deseja mesmo deletar essa tecnologia do seu perfil? Essa acao e irreversivel'
			)
		) {
			api
				.delete(`users/techs/${id}`, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					const updatedTechList = userData.techs.filter(
						(item: TechItemProps) => item.id !== id
					)
					setUserData((prevState) => {
						return { ...prevState, techs: updatedTechList }
					})
				})
				.catch((error) => console.error('algo deu errado: ', error))
		}
	}

	return (
		<div className="flex justify-between items-center bg-neutral-900 p-2 rounded">
			<span className="font-semibold">{title}</span>

			<div className="flex items-center gap-4">
				<span className="text-neutral-500 text-xs">{status}</span>
				<button onClick={handleDeleteTech}>
					<FaTrashAlt />
				</button>
			</div>
		</div>
	)
}

export default TechItem
