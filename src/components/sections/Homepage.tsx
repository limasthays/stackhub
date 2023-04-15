import { Button } from '../ui/form-components/Button'
import Image from 'next/image'
import MainIllustration from '../../../public/images/main-illustration.svg'
import { useRouter } from 'next/router'

export function Homepage() {
	const router = useRouter()

	return (
		<div className="h-screen flex flex-col md:flex-row py-12 px-6 justify-evenly items-center">
			<Image
				src={MainIllustration}
				alt="illustration of a person holding a mug of coffee"
				className="md:w-1/3"
			/>

			<div className="flex flex-col justify-center items-center gap-4 mt-4">
				<div className="text-center mb-2">
					<h1>stackhub</h1>
					<span className="font-bold">todas as suas techs em um só lugar.</span>
				</div>

				<Button
					title="cadastre-se"
					variant="secondary"
					type="button"
					onClick={(event) => {
						event.preventDefault()
						router.push('/signup')
					}}
				/>

				<Button
					title="login"
					variant="primary"
					type="button"
					onClick={(event) => {
						event.preventDefault()
						router.push('/login')
					}}
				/>
			</div>
		</div>
	)
}
