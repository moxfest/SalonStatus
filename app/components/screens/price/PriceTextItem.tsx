import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'

import styles from './price.module.scss'

import Heading from "@/ui/heading/Heading";
import SubHeading from "@/ui/heading/SubHeading";
import Description from "@/ui/heading/Description";
interface Iitem{
    service: string;
    description: string;
    price: string;

}
const PriceTextItem: FC<{ item:Iitem }> = ({ item }) => {
    return (
        <div className={'flex items-start flex-col text-left border-b-2 border-white mb-8'}>
            <div className={'flex  justify-between '+ styles.string}>
                <Heading title={item.service}  className={'text-xl '}/>
                <SubHeading title={item.price} />

            </div>
            <div>
                <Description text={item.description}/>
            </div>
        </div>
    )
}

export default PriceTextItem;
