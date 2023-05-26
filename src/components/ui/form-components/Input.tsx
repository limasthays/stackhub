/* eslint-disable react/display-name */
import React from 'react'

type InputProps = React.ComponentPropsWithoutRef<'input'>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(props, ref) => {
		const { id, name, placeholder, required, disabled, type, ...rest } = props

		return (
			<input
				ref={ref}
				type={type}
				autoComplete="off"
				id={id}
				name={name}
				{...rest}
				className="bg-neutral-700 border border-neutral-500 rounded py-1 px-2 text-xs w-full h-8"
			/>
		)
	}
)
