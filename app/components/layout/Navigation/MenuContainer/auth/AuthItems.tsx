import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/configs/url.config'

import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user?.email && (
			<MenuItem
				item={{
					icon: 'AiOutlineLock',
					link: getAdminHomeUrl(),
					title: 'Админ панель',
				}}
			/>
		)}
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'AiOutlineSetting',
							link: '/profile',
							title: 'Профиль',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'AiOutlineLogin', link: '/auth', title: 'Вход/Регистрация' }} />
			)}


		</>
	)
}

export default AuthItems
