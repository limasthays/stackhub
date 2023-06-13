import LogoutButton from '@/components/ui/LogoutButton'

export function DashboardHeader() {
	return (
		<header className="flex justify-between items-center pb-6">
			<h1>Stackhub</h1>
			<LogoutButton />
		</header>
	)
}
