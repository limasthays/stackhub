import LogoutButton from '@/components/ui/LogoutButton'

export function DashboardHeader() {
	return (
		<header className="flex justify-between items-center pb-4">
			<h1>Stackhub</h1>
			<LogoutButton />
		</header>
	)
}
