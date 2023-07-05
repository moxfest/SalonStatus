import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'



import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getAdminUrl } from '@/configs/url.config'
import {BlogService} from "@/services/blog/blog.service";
import {convertMongoDate} from "@/utils/date/convertMongoDate";
import generateSlug from "@/utils/string/generateSlug";

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['posts list', debouncedSearch],
		() => BlogService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(actor): ITableItem => ({
						_id: String(actor.id),
						editUrl: getAdminUrl(`post/edit/${actor.id?actor.id:generateSlug('')}`),
						items: [actor.title, convertMongoDate(actor.created_at)],
					})
				),
			onError(error) {
				toastError(error, 'список постов')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create actor',
		() => BlogService.create(),
		{
			onError(error) {
				toastError(error, 'Создание поста')
			},
			onSuccess({ data }) {
				toastr.success('Создание поста', 'прошло успешно')
				push(getAdminUrl(`post/edit/${data.id}`))
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete post',
		(actorId: string) => BlogService.delete(actorId),
		{
			onError(error) {
				toastError(error, 'удаление поста')
			},
			onSuccess() {
				toastr.success('удаление поста', 'удаление поста успешно')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
