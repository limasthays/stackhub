import { MdClose } from 'react-icons/md'

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
		if ((event.target as HTMLDivElement).id === 'modal') {
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
			<section className="mx-3 w-full max-w-[300px] md:max-w-[380px]">
				<div className="flex justify-between items-center bg-neutral-700 px-4 py-3 rounded-t">
					<span className="text-sm font-bold">{title}</span>
					<button className="font-bold bg-neutral-700" onClick={onClose}>
						<MdClose />
					</button>
				</div>

				{children}
			</section>
		</div>
	)
}
