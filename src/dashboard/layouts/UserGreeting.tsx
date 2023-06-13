import { useContext } from 'react'
import { DashboardContentContext } from '../contexts/DashboardContext'

export function UserGreeting() {
	const { userData } = useContext(DashboardContentContext)

	return (
		<div className="py-8">
			<h3 className="text-neutral-50 font-bold text-lg">
				Olá, {userData?.name}
			</h3>
			<p>{userData?.course_module}</p>
		</div>
	)
}
