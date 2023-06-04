import { IMenu } from './menu.types'

const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'AiOutlineRead',
			link: '/',
			title: 'Главная',
		},
		{
			icon: 'AiOutlineTeam',
			link: '/masters',
			title: 'Мастера',
		},
		{
			icon: 'AiOutlineEye',
			link: '/blog',
			title: 'Новости',
		},
		{
			icon: 'AiOutlineMoneyCollect',
			link: '/price',
			title: 'Цены',
		},

	],
}

const userMenu: IMenu = {
	title: 'General',
	items: [],
}

export const menus: IMenu[] = [firstMenu, userMenu]
