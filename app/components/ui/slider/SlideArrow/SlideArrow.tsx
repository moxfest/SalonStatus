import { FC } from 'react'
import cn from 'classnames'

import { MaterialIcon } from '../../icons/MaterialIcon'

import styles from './SlideArrow.module.scss'

interface ISlideArrow {
	variant: 'left' | 'right'
	clickHandler: () => void
	disabled?:boolean
}

const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandler, disabled }) => {
	const isLeft = variant === 'left'

	return (
		<button
			disabled={disabled}
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
		>
			<MaterialIcon name={isLeft ? 'AiOutlineLeft' : 'AiOutlineRight'} />
		</button>
	)
}

export default SlideArrow
