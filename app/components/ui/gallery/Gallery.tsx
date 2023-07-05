import {FC, useEffect, useRef, useState} from 'react'

import { IGalleryItem } from './gallery.types'
import GalleryItem from './GalleryItem'

import styles from './Gallery.module.scss'
import {MaterialIcon} from "@/ui/icons/MaterialIcon";
import SlideArrow from "@/ui/slider/SlideArrow/SlideArrow";
interface SliderProps {
	images: string[];
	width: string;
	height: string;
}
const Gallery: FC<{ items: IGalleryItem[],contain?:string }> = ({ items },contain?) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const handlePrev = (): void => {
		setCurrentIndex(currentIndex - 1);
	};

	const handleNext = (): void => {
		setCurrentIndex(currentIndex + 1);
	};

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.children[currentIndex].scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'start',
			});
		}
	}, [currentIndex]);
	return (<>
		<div className={styles.gallery} ref={containerRef}>
			{items.map(item => (
				<GalleryItem key={item.url} item={item} variant='vertical' contain={contain} />
			))}

		</div>
	<div className={'absolute right-1/3'}>
		{currentIndex === items.length - 1 && 	<SlideArrow variant="left" clickHandler={handlePrev} disabled={currentIndex === 0} />}
		{ currentIndex === 0 && 	<SlideArrow variant="right" clickHandler={handleNext}  disabled={currentIndex === items.length - 1} />}
	</div>
		</>
	)
}

export default Gallery
