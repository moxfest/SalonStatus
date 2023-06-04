import {FC} from 'react';
import PostItem from "@/screens/blog/posts/PostItem";

const AllPosts: FC = () => {
    const posts = [{
        _id: 1,
        src: '@/assets/images/rabota1.jpg',
        description: 'fadsfadsfasf',
        heading: 'dsfasdfads',
        date: 'fdsfasdfdsaf'
    }, {
        _id: 2,
        src: '@/assets/images/rabota1.jpg',
        description: 'fadsfadsfasf',
        heading: 'dsfasdfads',
        date: 'fdsfasdfdsaf'
    }, {
        _id: 3,
        src: '@/assets/images/rabota1.jpg',
        description: 'fadsfadsfasf',
        heading: 'dsfasdfads',
        date: 'fdsfasdfdsaf'
    },
        {
            _id: 4,
            src: '@/assets/images/rabota1.jpg',
            description: 'fadsfadsfasf',
            heading: 'dsfasdfads',
            date: 'fdsfasdfdsaf'
        },
        {
            _id: 5,
            src: '@/assets/images/rabota1.jpg',
            description: 'fadsfadsfasf',
            heading: 'dsfasdfads',
            date: 'fdsfasdfdsaf'
        },
        {
            _id: 6,
            src: '@/assets/images/rabota1.jpg',
            description: 'fadsfadsfasf',
            heading: 'dsfasdfads',
            date: 'fdsfasdfdsaf'
        },

    ]
    return (
        <div className={'flex-col items-center flex '} >
            <div className={'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-4 lg:grid-rows-3 xl:grid-rows-2 gap-4 place-items-center place-content-center'}>
                {posts.map(elem => {
                    return <PostItem key={elem._id} post={elem}/>
                })}
            </div>
            <button className={'btn-primary p-3 px-28 text-2xl'}>Показать ещё</button>
        </div>
    );
};

export default AllPosts;