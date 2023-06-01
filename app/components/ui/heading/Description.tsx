import parse from 'html-react-parser'
import { FC } from 'react'

const Description: FC<{ text: string; className?: string }> = ({
	text,
	className = '',
}) => {
	return (
		<div
			className={`text-lg font-light text-white  ${className}`}
		>
			<p>{parse(text)}</p>
		</div>
	)
}

export default Description
