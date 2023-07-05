import {errorCatch} from 'api/api.helpers'
import type {GetStaticProps, NextPage} from 'next'

import Home from '@/screens/home/Home'
import {IHome} from '@/screens/home/home.types'

import {IGalleryItem} from '@/components/ui/gallery/gallery.types'
import {ISlide} from '@/components/ui/slider/slider.types'

import {ActorService} from '@/services/actor/actor.service'
import {MovieService} from '@/services/movie/movie.service'

import {getGenresList} from '@/utils/movie/getGenresList'

import {getActorUrl, getMovieUrl} from '@/configs/url.config'

const HomePage: NextPage<IHome> = (props) => {
    return <Home {...props} />
}



export default HomePage
