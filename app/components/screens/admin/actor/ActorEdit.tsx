import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import formStyles from '@/components/shared/admin/adminForm.module.scss'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import UploadField from '@/components/ui/form-elements/UploadField/UploadField'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/form-elements/Button'
import Field from '@/ui/form-elements/Field'
import Heading from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta'
import generateSlug from '@/utils/string/generateSlug'
import {stripHtml} from "string-strip-html";
import dynamic from "next/dynamic";
const DynamicTextEditor = dynamic(
	() => import('@/ui/form-elements/TextEditor'),
	{
		ssr: false,
	}
)

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useActorEdit(setValue)
	const isLoading1 =	false
	return (
		<Meta title="Изменение Поста">
			<AdminNavigation />
			<Heading title="Изменение Поста" />
			{isLoading1 ? (
				<SkeletonLoader count={3} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
					<div className={formStyles.fields}>
						<Field
							{...register('title', {
								required: 'Название обязательно',
							})}
							placeholder="Название поста"
							error={errors.title}
						/>
						<Controller
							name="description"
							control={control}
							defaultValue=""
							render={({
										 field: { value, onChange },
										 fieldState: { error },
									 }) => (
								<DynamicTextEditor
									placeholder="описание"
									onChange={onChange}
									error={error}
									value={value}
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Описание обязательно!',
								},
							}}
						/>
						<Controller
							name="photo"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder="Фото"
									error={error}
									folder="posts"
									image={value}
									onChange={onChange}
								/>
							)}
							rules={{
								required: 'Фото обязательно!',
							}}
						/>
					</div>

					<Button>Обновить</Button>
				</form>
			)}
		</Meta>
	)
}

export default ActorEdit
