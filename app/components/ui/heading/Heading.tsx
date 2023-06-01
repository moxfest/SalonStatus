import { FC } from 'react'

const Heading: FC<{
	title: string
	className?: string
}> = ({ title, className = '' }) => {
	return (
		<h1
			className={`text-white text-opacity-100  ${
				className.includes('xl') ? '' : 'text-3xl'
			} ${className}`}
		>
			{title}
		</h1>
	)
}

export default Heading
