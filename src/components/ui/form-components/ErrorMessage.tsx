import { ReactNode } from 'react'

type ErrorMessageProps = {
	children: ReactNode
}

export function ErrorMessage({ children }: ErrorMessageProps) {
	return <span className="text-rose-600 text-xs">{children}</span>
}
