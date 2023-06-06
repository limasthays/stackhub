import { TechItemProps } from '@/dashboard/types/types'

function TechItem({ status, title }: TechItemProps) {
	return (
		<div className="flex justify-between items-center bg-neutral-900 p-2 rounded">
			<span className="font-semibold">{title}</span>
			<span className="text-neutral-500 text-xs">{status}</span>
		</div>
	)
}

export default TechItem
