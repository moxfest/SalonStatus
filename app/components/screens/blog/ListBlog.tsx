import React, {CSSProperties, FC, useEffect, useState} from 'react';
import styles from './blog.module.scss';
import AllPosts from './posts/AllPosts';

import Gallery from "@/ui/gallery/Gallery";

import SkeletonLoader from "@/ui/skeleton-loader/SkeletonLoader";

import Heading from "@/ui/heading/Heading";
import {IPost} from "@/shared/types/blog.types";



const ListBlog: FC<{posts:IPost[]}> = (posts) => {
    const [flag, setFlag] = useState<boolean>(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setFlag(false);
        }, 100);

        return () => clearTimeout(timeoutId);
        // Очистим таймаут при размонтировании компонента
    }, []);

    const isLoading=flag
    const map=[{
        posterPath: '/posts/post1.jpg',  name: 'string',
        url: 'https://img2.akspic.ru/previews/7/9/0/8/5/158097/158097-volosy-kashtanovye_volosy-salon_krasoty-pricheska-blondin-550x310.jpg',
        content: {
            title: 'Процесс нанесения перманентного макияжа',
            subTitle: 'Перманентный макияж PMU Lips, также известный как микропигментация или'
        }
    },
        {
            posterPath: '/posts/post2.jpg',  name: 'string',
            url: 'https://img2.akspic.ru/previews/7/9/0/8/5/158097/158097-volosy-kashtanovye_volosy-salon_krasoty-pricheska-blondin-550x310.jpg',
            content: {
                title: 'Перманентный макияж PMU Lips, также известный как микропигментация или',
                subTitle: 'Перманентный макияж PMU Lips, также известный как микропигментация или'
            }
        }, {
            posterPath: '/posts/post3.jpg',  name: 'string',
            url: 'https://img2.akspic.ru/previews/7/9/0/8/5/158097/158097-volosy-kashtanovye_volosy-salon_krasoty-pricheska-blondin-550x310.jpg',
            content: {
                title: 'Перманентный макияж PMU Lips, также известный как микропигментация или',
                subTitle: 'Перманентный макияж PMU Lips, также известный как микропигментация или'
            }
        },
        {
            posterPath: '/posts/post4.jpg',  name: 'string',
            url: 'https://img2.akspic.ru/previews/7/9/0/8/5/158097/158097-volosy-kashtanovye_volosy-salon_krasoty-pricheska-blondin-550x310.jpg',
            content: {
                title: 'Перманентный макияж PMU Lips, также известный как микропигментация или',
                subTitle: 'Перманентный макияж PMU Lips, также известный как микропигментация или'
            }
        }, {
            posterPath: '/posts/post5.jpg',  name: 'string',
            url: 'https://img2.akspic.ru/previews/7/9/0/8/5/158097/158097-volosy-kashtanovye_volosy-salon_krasoty-pricheska-blondin-550x310.jpg',
            content: {
                title: 'Перманентный макияж PMU Lips, также известный как микропигментация или',
                subTitle: 'Перманентный макияж PMU Lips, также известный как микропигментация или'
            }
        }, {
            posterPath: '/posts/post1.jpg',  name: 'string',
            url: 'https://img2.akspic.ru/previews/7/9/0/8/5/158097/158097-volosy-kashtanovye_volosy-salon_krasoty-pricheska-blondin-550x310.jpg',
            content: {
                title: 'Массаж в Каспийске',
                            subTitle: 'Эффект массажа - естественная восстанавливающая сила организма, сила жизни». Так сказал Гиппократ, так говорим мы и наши клиенты после сеанса массажа в нашем салоне у метро «Московская». Массажны'
            }
        }, {
            posterPath: 'data:image/j.jpgpeg;base64,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',
            name: 'string',
            url: 'https://img2.akspic.ru/previews/7/9/0/8/5/158097/158097-volosy-kashtanovye_volosy-salon_krasoty-pricheska-blondin-550x310.jpg',
            content: {
                title: 'string',
                subTitle: 'string'
            }
        }
    ]
    return isLoading?(<div className={'container text-white px-layout py-layout '+ styles.listBlog}><SkeletonLoader count={5} className={'h-48 w-48 mr-1'}

                                      containerClassName={'flex flex-wrap'}
                                      /> </div>):(
        <div className={'container text-white px-layout '+ styles.listBlog}>
            <Heading title={'Актуальные посты'}/>
            <Gallery items={map}/>
            <Heading title={'Все посты'}/>
            <AllPosts />
        </div>
    );
};

export default ListBlog;