import { DashboardHeader } from './DashboardHeader'
import { UserGreeting } from './UserGreeting'
import { ManageTechs } from './ManageTechs'

export function DashboardContent() {
	return (
		<main className="bg-neutral-900 max-w-3xl mx-auto p-8">
			<DashboardHeader />
			<UserGreeting />
			<ManageTechs />
		</main>
	)
}
