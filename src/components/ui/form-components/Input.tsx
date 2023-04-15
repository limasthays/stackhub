type InputProps = React.ComponentPropsWithoutRef<'input'>

export function Input({ id, type }: InputProps) {
	return (
		<input
			type={type}
			id={id}
			className="bg-neutral-700 border border-neutral-500 rounded py-1 px-2 text-xs w-full h-8"
		/>
	)
}
