import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import { Meta } from '@/utils/meta'

import { getMovieUrl } from '@/configs/url.config'


import styles from './reviews.module.scss'
import {useFavorites} from "@/screens/favorites/useFavorites";
import FavoriteItem from '../favorites/FavoriteItem'
import {any} from "prop-types";
import Image from "next/image";
import review from "@/assets/images/review.jpg";


const Reviews: FC = () => {
    const { favoritesMovies, isLoading } = useFavorites()
    let favoritesMovies1:any= [
        {
            _id: '1',
            bigPoster: 'https://okean.org/uploads/images/articles/3206/1032745532.jpg',
            title: 'Визаж',
            subTitle: '',
            link: '/',
            slug:'slug1'
        },{
            _id: '2',
            bigPoster: 'https://okean.org/uploads/images/articles/3206/1032745532.jpg',
            title: 'Визаж',
            subTitle: '',
            link: '/',
            slug:'slug12'
        },{
            _id: '3',
            bigPoster: 'https://okean.org/uploads/images/articles/3206/1032745532.jpg',
            title: 'Визаж',
            subTitle: '',
            link: '/',
            slug:'slug123'
        }, {
            _id: '4',
            bigPoster: 'https://okean.org/uploads/images/articles/3206/1032745532.jpg',
            title: 'Визаж',
            subTitle: '',
            link: '/',
            slug:'slug1234'
        }, {
            _id: '5',
            bigPoster: 'https://okean.org/uploads/images/articles/3206/1032745532.jpg',
            title: 'Визаж',
            subTitle: '',
            link: '/',
            slug:'slug12345'
        }, {
            _id: '6',
            bigPoster: 'https://okean.org/uploads/images/articles/3206/1032745532.jpg',
            title: 'Визаж',
            subTitle: '',
            link: '/',
            slug:'slug12345'
        },

    ]
    return (
        <Meta title="Отзывы">
            <Heading title={'Отзывы'} className={'text-center text-6xl mb-8'} />
            <section className={styles.reviews}>
                <div className={'flex flex-center'}>
                <Image
                    src={review}
                    width={430}
                    height={430}
                    className={'absolute ' + styles.image}
                    alt="background"
                />
                </div>
            </section>
        </Meta>
    )
}

export default Reviews