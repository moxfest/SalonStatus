import {FC} from 'react'

import Gallery from '@/ui/gallery/Gallery'
import Heading from '@/ui/heading/Heading'
import {Meta} from '@/utils/meta'

import {IHome} from './masters.types'

import styles from './masters.module.scss';



const Masters: FC<IHome> = ({slides, trendingMovies, actors}) => {
    const trendingMovies1 = [{
        posterPath: '/authors/master1.jpg',
        name: 'string',
        url: '/masters/1',
        content: {
            title: 'Даудова Мадина',
            subTitle: ''
        }
    },
        {
            posterPath: '/authors/master2.jpg',
            name: 'string',
            url: '/masters/2',
            content: {
                title: 'Магомедова Мальвина',
                subTitle: ''
            }
        }, {
            posterPath: '/authors/master3.jpg',
            name: 'string',
            url: '/masters/3',
            content: {
                title: 'Смирнова Алла',
                subTitle: ''
            }
        },
        {
            posterPath: '/authors/master4.jpg',
            name: 'string',
            url: '/masters/4',
            content: {
                title: 'Алиева Мадина',
                subTitle: ''
            }
        },
    ]
    const trendingMovies2 = [{
        posterPath: '/authors/master9.jpg',
        name: 'string',
        url: '/masters/9',
        content: {
            title: 'Волкова Лидия',
            subTitle: ''
        }
    },
        {
            posterPath: '/authors/master10.jpg',
            name: 'string',
            url: '/masters/2',
            content: {
                title: 'Иванова Олеся',
                subTitle: ''
            }
        }, {
            posterPath: '/authors/master8.jpg',
            name: 'string',
            url: '/masters/3',
            content: {
                title: 'Магомодеова Айшат',
                subTitle: ''
            }
        },
        {
            posterPath: '/authors/master6.jpg',
            name: 'string',
            url: '/masters/4',
            content: {
                title: 'Лобанова Ника',
                subTitle: ''
            }
        },
    ]
    const trendingMovies3 = [{
        posterPath: '/authors/master14.jpg',
        name: 'string',
        url: '/masters/14',
        content: {
            title: 'Нурбекова Гульмира',
            subTitle: ''
        }
    },
        {
            posterPath: '/authors/master12.jpg',
            name: 'string',
            url: '/masters/12',
            content: {
                title: 'Мельникова Виктория',
                subTitle: ''
            }
        }, {
            posterPath: '/authors/master13.jpg',
            name: 'string',
            url: '/masters/3',
            content: {
                title: 'Алла васильевна',
                subTitle: ''
            }
        },

    ]
    const trendingMovies4 = [{
        posterPath: '/authors/master5.jpg',
        name: 'string',
        url: '/masters/5',
        content: {
            title: 'Нечаева Варвара',
            subTitle: ''
        }
    },
        {
            posterPath: '/authors/master11.jpg',
            name: 'string',
            url: '/masters/11',
            content: {
                title: 'Елена Васильевна',
                subTitle: ''
            }
        }, {
            posterPath: '/authors/master7.jpg',
            name: 'string',
            url: '/masters/7',
            content: {
                title: 'Алла васильевна',
                subTitle: ''
            }
        },

    ]

    return (
        <Meta
            title="Мастера"
            description="Masters Salon Status"
        >


            <div className={styles.home}>

                <Heading
                    title='Наши мастера'
                    className="text-white text-2xl lg:text-6xl z-1 text-shadow shadow-black mb-8 "
                />

                <Heading
                    title='Визажисты'
                />
                <div className={'w-320 2xl:w-1200 lg:w-800 sm:w-320 h-1/2'}>
                    {trendingMovies1.length && <Gallery items={trendingMovies1} contain={'contain'}/>}
                </div>


                    <Heading
                        title='Парикмахеры'
                    />
                    <div className={'w-320 2xl:w-1200 lg:w-800 sm:w-320 h-1/2'}>
                        {trendingMovies1.length && <Gallery items={trendingMovies2} contain={'contain'}/>}
                    </div>

      <Heading
                        title='Косметологи'
                    />
                    <div className={'w-320 2xl:w-1200 lg:w-800 sm:w-320 h-1/2'}>
                        {trendingMovies1.length && <Gallery items={trendingMovies3} contain={'contain'}/>}
                    </div>
                <Heading
                        title='SPA-массажисты'
                    />
                    <div className={'w-320 2xl:w-1200 lg:w-800 sm:w-320 h-1/2'}>
                        {trendingMovies1.length && <Gallery items={trendingMovies4} contain={'contain'}/>}
                    </div>

            </div>

        </Meta>
    )
}

export default Masters
