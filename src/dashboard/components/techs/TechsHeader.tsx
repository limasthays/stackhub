type TechsHeaderProps = {
	handleModal: () => void
}

export function TechsHeader({ handleModal }: TechsHeaderProps) {
	return (
		<div className="flex justify-between items-center">
			<span className="font-semibold">Tecnologias</span>

			<button
				className="font-bold rounded bg-neutral-800 px-2"
				onClick={handleModal}
			>
				+
			</button>
		</div>
	)
}
