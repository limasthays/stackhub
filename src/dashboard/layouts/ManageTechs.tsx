import { useContext, useState } from 'react'
import { TechsHeader } from '../components/techs/TechsHeader'
import TechsList from '../components/techs/TechsList'
import { DashboardContentContext } from '../contexts/DashboardContext'
import { ModalContainer } from '@/components/modals/ModalContainer'

export function ManageTechs() {
	const { userData } = useContext(DashboardContentContext)
	const [isModalVisible, setIsModalVisible] = useState(true)

	return (
		<>
			{isModalVisible && <ModalContainer />}
			<section>
				<TechsHeader />
				<TechsList techs={userData?.techs} />
			</section>
		</>
	)
}
