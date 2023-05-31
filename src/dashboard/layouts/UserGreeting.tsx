type UserGreetingProps = {
	userData: any
}

export function UserGreeting({ userData }: UserGreetingProps) {
	return (
		<div>
			<h3 className="text-neutral-50 font-bold text-lg">
				Ola, {userData?.name}
			</h3>
			<p>{userData?.course_module}</p>
		</div>
	)
}
