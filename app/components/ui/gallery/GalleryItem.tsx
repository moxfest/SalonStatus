import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery.types'
import {API_URL_UPLOADS} from "@/configs/api.config";

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant ,contain}) => {
	return (
		<Link href={item.url} >
			<a
				className={cn(styles.item, {
					[styles.withText]: item.content,
					[styles.horizontal]: variant === 'horizontal',
					[styles.vertical]: variant === 'vertical',
				})}
			>
				<Image
					alt={item.name}
					src={API_URL_UPLOADS+item.posterPath}
					layout="fill"
					draggable={true}
					priority
					objectFit={contain?contain:'fill'}
					objectPosition={'center'}


				/>
				{item.content && (
					<div className={styles.content}>
						<div className={styles.title}>{item.content.title}</div>
						{item.content.subTitle && (
							<div className={styles.subTitle}> {item.content.subTitle}</div>
						)}
					</div>
				)}
			</a>
		</Link>
	)
}

export default GalleryItem
