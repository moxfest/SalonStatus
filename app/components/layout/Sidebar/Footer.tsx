import { FC } from 'react'

import MoviesContainer from './MoviesContainer/MoviesContainer'
import Search from './Search/Search'
import logoImage from '@/assets/images/status.svg'
import styles from './Footer.module.scss'
import Image from "next/image";
import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			{/*<Search />*/}
			{/*<MoviesContainer />*/}
			<ul>
				<li>		<Image
					src={logoImage}
					width={247}
					height={34}
					alt="Movie app"
					draggable={false}
				/></li>
			</ul>
			<ul>
				<li>Контакты</li>
				<li>+7 (812) 123-45-67</li>
				<li>+7 (812) 123-45-67</li>
				<li>Ул.Ленина 17, Каспийск</li>
			</ul>
			<ul>
				<li>Режим работы</li>
				<li>С 10:00 до 21:00(Пн-Пт)</li>
				<li>С 11:00 до 20:00(Сб-Вс)</li>
			</ul>
			<ul>
				<li>Мы в социальных сетях</li>
				<li><a href="" className={'text-4xl'}>{MaterialIcon({name:'AiOutlineInstagram'})}</a></li>
				<li><a href="" className={'text-4xl'}>{MaterialIcon({name:'AiOutlineWhatsApp'})}</a></li>
				<li><a href="" className={'text-4xl'}>{MaterialIcon({name:'AiOutlineMail'})}</a></li>

			</ul>
		</div>
	)
}

export default Footer
