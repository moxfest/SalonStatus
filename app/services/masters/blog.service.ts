import axios, { axiosClassic } from 'api/interceptors'

import { IActorEditInput } from '@/components/screens/admin/actor/actor-edit.interface'

import { IActor } from '@/shared/types/movie.types'

import {getActorsUrl, getPostsUrl} from '@/configs/api.config'
import { IPost } from '@/shared/types/blog.types'


export const BlogService = {
	async getBySlug(slug: string) {
		return axiosClassic.get<IPost>(getActorsUrl(`/add${slug}`))
	},

	async create() {
		return axios.post<string>(getActorsUrl(''))
	},

	async update(_id: string, data: IActorEditInput) {
		return axios.put<string>(getActorsUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	},

	async getAll(searchTerm?: string) {
		return axiosClassic.get<IPost[]>(getPostsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getById(_id: string) {
		return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},
}
