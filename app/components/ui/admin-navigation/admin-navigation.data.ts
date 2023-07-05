import { getAdminHomeUrl, getAdminUrl } from '@/configs/url.config'

import { INavItem } from './admin-navigation.interface'

export const navItems: INavItem[] = [
	{
		title: 'Статистика',
		link: getAdminHomeUrl(),
	},
	{
		title: 'Пользователи',
		link: getAdminUrl('users'),
	},
	{
		title: 'Посты',
		link: getAdminUrl('posts'),
	},
	{
		title: 'Записи',
		link: getAdminUrl('records'),
	},
]
