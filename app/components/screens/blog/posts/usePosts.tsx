import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'


export interface ITablePost{
    _id: string
    editUrl: string
    items: IPost
}
import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getAdminUrl } from '@/configs/url.config'
import {BlogService} from "@/services/blog/blog.service";
import {IPost} from "@/shared/types/blog.types";

export const usePosts = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearch = useDebounce(searchTerm, 500)

    const queryData = useQuery(
        ['Post Lists', debouncedSearch],
        () => BlogService.getAll(debouncedSearch),
        {
            select: ({ data }) =>
                data.map(
                    (post): ITablePost => ({
                        _id: String(post.id),
                        editUrl: getAdminUrl(`post/edit/${post.id}`),
                        items: post,
                    })
                ),
            onError(error) {
                toastError(error, 'Список постов')
            },
        }
    )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const { push } = useRouter()

    const { mutateAsync: createAsync } = useMutation(
        'create post',
        () => BlogService.create(),
        {
            onError(error) {
                toastError(error, 'Create actor')
            },
            onSuccess({ data: _id }) {
                toastr.success('Create actor', 'create was successful')
                push(getAdminUrl(`actor/edit/${_id}`))
            },
        }
    )

    const { mutateAsync: deleteAsync } = useMutation(
        'delte post',
        (actorId: string) => BlogService.delete(actorId),
        {
            onError(error) {
                toastError(error, 'Удаление поста')
            },
            onSuccess() {
                toastr.success('Удаление поста', 'пост успешно удалён')
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
