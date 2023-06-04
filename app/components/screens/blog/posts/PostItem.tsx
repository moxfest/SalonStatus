import {FC} from 'react';
import Image from "next/image";
import Heading from "../../../ui/heading/Heading";
import Description from "../../../ui/heading/Description";
import styles from './post.module.scss';
import { IPost } from './post.types';




const PostItem: FC<{ post: IPost }> = ({post}) => {
    return (
        <div className={styles.post}>
            <Image
                alt={''}
                src={require('@/assets/images/rabota1.jpg')}
                height={500}

                layout={"intrinsic"}
                draggable={false}
                objectFit={"cover"}
                objectPosition={'center'}
            />
            <div className={styles.textPost}>
                <div className={styles.date}>{post.date}</div>
                <Heading title={post.heading}/>
                <Description className={'text-gray-600 overflow-clip'} text={post.description }/>

            </div>
               
        </div>
    );
};

export default PostItem;