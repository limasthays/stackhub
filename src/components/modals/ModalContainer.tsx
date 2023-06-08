type ModalContainerProps = {
	onClose: () => void
	children: React.ReactNode
	title: string
}

export function ModalContainer({
	onClose,
	children,
	title,
}: ModalContainerProps) {
	const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target.id === 'modal') {
			onClose()
		}
	}

	return (
		<div
			onClick={(event) => {
				handleBackgroundClick(event)
			}}
			id="modal"
			className="bg-neutral-900/50 absolute top-0 left-0 w-full h-full flex items-center justify-center"
		>
			<section className="md:w-1/2">
				<div className="flex justify-between items-center bg-neutral-700 px-4 rounded-t">
					<span>{title}</span>
					<button
						className="rounded p-2 font-bold bg-neutral-700"
						onClick={onClose}
					>
						x
					</button>
				</div>

				{children}
			</section>
		</div>
	)
}
