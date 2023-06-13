type TechsHeaderProps = {
	handleModal: () => void
}

export function TechsHeader({ handleModal }: TechsHeaderProps) {
	return (
		<div className="flex justify-between items-center">
			<span className="font-bold text-lg">Tecnologias</span>

			<button
				className="font-bold rounded bg-neutral-800 px-2 h-8 w-8"
				onClick={handleModal}
			>
				+
			</button>
		</div>
	)
}
