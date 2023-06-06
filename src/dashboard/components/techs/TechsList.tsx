import { TechItemProps } from '@/dashboard/types/types'
import TechItem from './TechItem'
import { nanoid } from 'nanoid'

function TechsList({ techs }: { techs: TechItemProps[] }) {
	return (
		<div className="bg-neutral-800 rounded flex flex-col gap-2 p-3">
			{techs?.map((item) => (
				<TechItem key={nanoid()} title={item.title} status={item.status} />
			))}
		</div>
	)
}

export default TechsList
