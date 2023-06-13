import { useContext } from 'react'
import { DashboardContentContext } from '../contexts/DashboardContext'

export function UserGreeting() {
	const { userData } = useContext(DashboardContentContext)

	return (
		<div className="py-8 flex flex-col gap-2 md:flex-row md:justify-between md:items-center md:gap-0">
			<h3 className="text-neutral-50 font-bold text-lg">
				Olá, {userData?.name}
			</h3>
			<p className="text-xs text-neutral-500">{userData?.course_module}</p>
		</div>
	)
}
