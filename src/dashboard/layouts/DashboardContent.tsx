import { DashboardHeader } from './DashboardHeader'
import { UserGreeting } from './UserGreeting'
import { ManageTechs } from './ManageTechs'
import { Divider } from '@/components/ui/Divider'

export function DashboardContent() {
	return (
		<main className="bg-neutral-900 max-w-3xl mx-auto p-6 md:p-8">
			<DashboardHeader />
			<Divider />
			<UserGreeting />
			<Divider />
			<ManageTechs />
		</main>
	)
}
