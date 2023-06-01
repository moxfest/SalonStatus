import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'
import {MaterialIcon} from "@/ui/icons/MaterialIcon";
import {AiOutlineInstagram} from "react-icons/ai";

const Logo: FC = () => {

	return (
		<Link href="/">
			<a className="px-layout block text-4xl text-white">
				{/*<Image*/}
				{/*	comp={}*/}
				{/*	width={247}*/}
				{/*	height={34}*/}
				{/*	alt="Movie app"*/}
				{/*	draggable={false}*/}
				{/*/>*/}
				{MaterialIcon({name:'AiOutlineInstagram'})}
			</a>
		</Link>
	)
}

export default Logo
