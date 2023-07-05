import { IActorEditInput } from './actor-edit.interface'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'



import { toastError } from '@/utils/api/withToastrErrorRedux'
import { getKeys } from '@/utils/object/getKeys'

import { getAdminUrl } from '@/configs/url.config'
import {BlogService} from "@/services/blog/blog.service";

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { query, push } = useRouter()

	const actorId = String(query.id)

	const { isLoading } = useQuery(
		['post', actorId],
		() => BlogService.getById(actorId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(error) {
				toastError(error, 'Получение постов')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'обновление постов',
		(data: IActorEditInput) => BlogService.update(actorId, data),
		{
			onError(error) {
				toastError(error, 'Обновление поста')
			},
			onSuccess() {
				toastr.success('Обновление поста', 'Обновление прошло успешно')
				push(getAdminUrl('posts'))
			},
		}
	)

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
