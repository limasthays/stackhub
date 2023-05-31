import classNames from 'classnames'

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
	title: string
	variant: 'primary' | 'secondary'
	size?: 'base' | 'sm'
}

export function Button({
	title,
	variant,
	type,
	onClick,
	size = 'base',
}: ButtonProps) {
	return (
		<button
			className={classNames('rounded font-bold text-sm leading-none', {
				['bg-purple-600']: variant === 'primary',
				['border-2']: variant === 'secondary',
				' w-full p-3': size === 'base',
				'px-4 py-3': size === 'sm',
			})}
			type={type}
			onClick={onClick}
		>
			{title}
		</button>
	)
}
