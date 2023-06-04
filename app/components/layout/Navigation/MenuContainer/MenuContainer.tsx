import dynamic from 'next/dynamic'
import { FC } from 'react'

import Menu from './Menu'
import { menus } from './menu.data'

const DynamicGenreMenu = dynamic(() => import('./genres/GenreMenu'), {
	ssr: false,
})

const MenuContainer: FC = () => {
	return (
		<div className={''}>
			<Menu menu={{ title: 'General', items: menus[0].items }} />
			{/*<DynamicGenreMenu />*/}
			{/*<Menu menu={{ title: 'General', items: [] }} />*/}
		</div>
	)
}

export default MenuContainer
