import classNames from 'classnames'

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
	title: string
	variant: 'primary' | 'secondary'
}

export function Button({ title, variant, type, onClick }: ButtonProps) {
	return (
		<button
			className={classNames(
				'rounded font-bold text-sm leading-none w-full p-3',
				{
					['bg-purple-600']: variant === 'primary',
					['border-2']: variant === 'secondary',
				}
			)}
			type={type}
			onClick={onClick}
		>
			{title}
		</button>
	)
}
