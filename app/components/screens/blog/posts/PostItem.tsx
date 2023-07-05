import {FC} from 'react';
import Image from "next/image";
import Heading from "../../../ui/heading/Heading";
import Description from "../../../ui/heading/Description";
import styles from './post.module.scss';

import {MaterialIcon} from "@/ui/icons/MaterialIcon";
import Link from "next/link";
import {IPost} from "@/shared/types/blog.types";
import {API_URL_UPLOADS} from "@/configs/api.config";






const PostItem: FC<{ post: IPost }> = ({post}) => {

    return (
        <div className={styles.post}>
            <div className={styles.image}>
            <Image
                alt={''}
                src={API_URL_UPLOADS + post.photo}
                height={250}
                width={500}
                draggable={false}
                objectFit='cover'
                objectPosition={'center'}
            />
            </div>
            <div className={styles.textPost}>
                <div className={styles.date}>{post.created_at}</div>
                <Link href={`blog/${post.id}`}>
                    <a>
                        <Heading title={post.title}/>
                    </a>
                </Link>

                <Description className={'text-gray-600 overflow-clip h-100 '} text={post.description }/>

            </div>
               
        </div>
    );
};

export default PostItem;