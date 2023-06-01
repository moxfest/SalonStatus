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
			link: '/reviews',
			title: 'Отзывы',
		},
		{
			icon: 'AiOutlineMoneyCollect',
			link: '/price',
			title: 'Цены',
		},
		{
			icon: 'AiOutlineContacts',
			link: '/contact',
			title: 'Контакты',
		},
		{
			icon: 'AiOutlineForm',
			link: '/auth',
			title: 'Запись',
		},

	],
}

const userMenu: IMenu = {
	title: 'General',
	items: [],
}

export const menus: IMenu[] = [firstMenu, userMenu]
