import { useContext, useState } from 'react'
import { TechsHeader } from '../components/techs/TechsHeader'
import TechsList from '../components/techs/TechsList'
import { DashboardContentContext } from '../contexts/DashboardContext'
import { IncludeTechModal } from '../components/modals/IncludeTechModal'

export function ManageTechs() {
	const { userData } = useContext(DashboardContentContext)
	const [isModalVisible, setIsModalVisible] = useState(false)

	return (
		<>
			{isModalVisible && (
				<IncludeTechModal
					onClose={() => {
						setIsModalVisible(false)
					}}
				/>
			)}
			<section>
				<TechsHeader
					handleModal={() => {
						setIsModalVisible(true)
					}}
				/>
				<TechsList techs={userData?.techs} />
			</section>
		</>
	)
}
