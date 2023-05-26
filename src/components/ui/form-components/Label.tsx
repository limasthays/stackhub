/* eslint-disable react/display-name */
import React from 'react'

type LabelProps = React.ComponentPropsWithoutRef<'label'> & {
	title: string
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
	(props, ref) => {
		const { htmlFor, title } = props
		return (
			<label
				ref={ref}
				htmlFor={htmlFor}
				className="text-sm font-semibold block text-neutral-50"
			>
				{title}
			</label>
		)
	}
)
