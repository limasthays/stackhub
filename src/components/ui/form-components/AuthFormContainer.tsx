type FormContainerProps = {
	children: React.ReactNode
	authTitle: string
}

export function AuthFormContainer({ children, authTitle }: FormContainerProps) {
	return (
		<div className="bg-neutral-800 rounded flex flex-col items-center py-8 px-4 min-w-[290px] max-w-min m-4">
			<h3 className="text-neutral-50">{authTitle}</h3>
			{children}
		</div>
	)
}
