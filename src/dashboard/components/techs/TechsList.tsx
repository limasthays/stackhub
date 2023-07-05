import { TechItemProps } from '@/dashboard/types/types'
import TechItem from './TechItem'
import { nanoid } from 'nanoid'

export function TechsList({ techs }: { techs: TechItemProps[] }) {
	return (
		<div className="bg-neutral-800 rounded flex flex-col gap-2 p-3 mt-4">
			{techs?.map((item) => (
				<TechItem
					key={nanoid()}
					title={item.title}
					status={item.status}
					id={item.id}
				/>
			))}

			{techs?.length === 0 && (
				<span>
					Você ainda não tem nenhuma tech cadastrada. Que tal cadastrar alguma e
					mostrar o seu conhecimento? :)
				</span>
			)}
		</div>
	)
}
