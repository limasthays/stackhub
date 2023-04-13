import classNames from 'classnames'

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
	title: string
	variant: 'primary' | 'secondary'
}

export function Button({ title, variant }: ButtonProps) {
	return (
		<button
			className={classNames('rounded font-bold w-1/2 md:w-3/4 py-2 px-4', {
				['bg-purple-600']: variant === 'primary',
				['border-2']: variant === 'secondary',
			})}
		>
			{title}
		</button>
	)
}
