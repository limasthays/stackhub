/* eslint-disable react/display-name */
import { nanoid } from 'nanoid'
import React from 'react'

type SelectProps = React.ComponentPropsWithoutRef<'select'> & {
	options: { value: string; title: string }[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
	(props, ref) => {
		const { options, name, id, ...rest } = props

		return (
			<select
				ref={ref}
				name={name}
				id={id}
				{...rest}
				className="bg-neutral-700 border border-neutral-500 rounded py-1 px-2 text-xs w-full h-8"
			>
				{options.map((option) => (
					<option key={nanoid()} value={option.value}>
						{option.title}
					</option>
				))}
			</select>
		)
	}
)
