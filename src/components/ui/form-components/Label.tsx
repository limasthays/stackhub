type LabelProps = React.ComponentPropsWithoutRef<'label'> & {
	title: string
}

export function Label({ title, htmlFor }: LabelProps) {
	return (
		<label
			htmlFor={htmlFor}
			className="text-sm font-semibold block text-neutral-50"
		>
			{title}
		</label>
	)
}
