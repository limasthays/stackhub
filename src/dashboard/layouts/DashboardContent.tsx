import { DashboardHeader } from './DashboardHeader'
import { UserGreeting } from './UserGreeting'
import { UserData } from '../types/types'
import { useContext } from 'react'
import { DashboardContentContext } from '../contexts/DashboardContext'

export function DashboardContent() {
	return (
		<main className="bg-neutral-900 max-w-3xl mx-auto p-8">
			<DashboardHeader />
			<UserGreeting />
		</main>
	)
}
