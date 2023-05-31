import { UserData } from '@/pages/dashboard'
import { DashboardHeader } from './DashboardHeader'
import { UserGreeting } from './UserGreeting'

type DashboardContentProps = {
	data: UserData | undefined
}

export function DashboardContent({ data }: DashboardContentProps) {
	return (
		<main className="bg-neutral-900 max-w-3xl mx-auto p-8">
			<DashboardHeader />
			<UserGreeting userData={data} />
		</main>
	)
}
