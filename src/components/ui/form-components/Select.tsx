import { nanoid } from 'nanoid'

type SelectProps = {
	options: { value: string; title: string }[]
	id: string
}

export function Select({ options, id }: SelectProps) {
	return (
		<select
			name={id}
			id={id}
			className="bg-neutral-700 border border-neutral-500 rounded py-1 px-2 text-xs w-full h-8"
		>
			{options.map((option) => (
				<option value={option.value} key={nanoid()}>
					{option.title}
				</option>
			))}
		</select>
	)
}
