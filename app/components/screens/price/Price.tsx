import {FC} from 'react'

import Gallery from '@/ui/gallery/Gallery'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'
import Slider from '@/ui/slider/Slider'

import {Meta} from '@/utils/meta'
import bgc from '@/assets/images/bgc.jpg'

import {inspect} from "util";
import styles from './price.module.scss';
import Image from "next/image";
import {IHome} from './price.types'
import img from '@/assets/images/price.jpg'

import PriceTextItem from "@/screens/price/PriceTextItem";

const Price: FC<IHome> = ({slides, trendingMovies, actors}) => {


    return (
        <Meta
            title="price цены на услуги"
            description="Status prices"
        >


            <div className={styles.price}>

                <Heading
                    title='Цены на услуги'
                    className="text-white text-6xl z-1 text-shadow shadow-black mb-8 "
                />
                <div className={'flex mb-16'}>
                    <Image
                        src={'http://176.120.202.7:4200/uploads/default/price1.jpg'}
                        width={636}
                        height={436}
                        className={'absolute rounded-3xl ' + styles.image}
                        alt="image"

                    />
                    <div className={'flex flex-col items-start ml-16 lg:ml-32 '+ styles.pricetext}>
                        <Heading title="Парикмахерские"  className={''}/>
                        <PriceTextItem item={{ service: 'Женская стрижка',
                            description: '++',
                            price: 'от 500 ₽'}}/>
                        <PriceTextItem item={{ service: 'Мужская стрижка',
                            description: '++',
                            price: 'от 400 ₽'}}/>
                        <PriceTextItem item={{ service: 'Наращивание волос',
                            description: '++',
                            price: 'от 400 ₽'}}/>
                        <PriceTextItem item={{ service: 'Плетение кос',
                            description: '++',
                            price: 'от 400 ₽'}}/>
                        <PriceTextItem item={{ service: 'Cвадебные прически',
                            description: '++',
                            price: 'от 400 ₽'}}/>
                        <PriceTextItem item={{ service: 'Кератиновое выпрямление волос',
                            description: '++',
                            price: 'от 400 ₽'}}/>

                    </div>
                </div>
                <div className={'flex mb-32'}>
                    <div className={'flex flex-col items-start '+ styles.pricetext}>
                        <Heading title="Косметические"  className={''}/>
                        <PriceTextItem item={{ service: 'Инъекционные процедуры',
                            description: '++',
                            price: 'от 500 ₽'}}/>
                        <PriceTextItem item={{ service: 'Криокосметология',
                            description: '++',
                            price: 'от 400 ₽'}}/>
                        <PriceTextItem item={{ service: 'Лазерная косметология',
                            description: '++',
                            price: 'от 400 ₽'}}/>
                        <PriceTextItem item={{ service: 'Перманентный макияж',
                            description: '++',
                            price: 'от 400 ₽'}}/>
                        <PriceTextItem item={{ service: 'Пирсинг',
                            description: '++',
                            price: 'от 400 ₽'}}/>
                        <PriceTextItem item={{ service: 'Удаление новообразований',
                        description: '++',
                        price: 'от 400 ₽'}}/>

                    </div>
                    <Image
                        src={img}
                        width={636}
                        height={536}
                        className={'absolute rounded-3xl ' + styles.image}
                        alt="image"

                    />

                </div>
            </div>
        </Meta>
    )
}

export default Price