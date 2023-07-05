import { IUserEditInput } from './user-edit.interface'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getAdminUrl } from '@/configs/url.config'

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { query, push } = useRouter()

	const userId = String(query.id)

	const { isLoading } = useQuery(
		['user', userId],
		() => UserService.getUser(userId),
		{
			onSuccess({ data }) {
				setValue('email', data.email)
				setValue('role.value', data.role.value)
			},
			onError(error) {
				toastError(error, 'ошибка получения пользователя')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update user',
		(data: IUserEditInput) => UserService.updateUser(userId, data),
		{
			onError(error) {
				toastError(error, 'Пользователь не обновлен')
			},
			onSuccess() {
				toastr.success('Пользователь обновлен', 'Обновление прошло успешно')
				push(getAdminUrl('users'))
			},
		}
	)

	const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
