import {FC} from 'react';
import PostItem from "@/screens/blog/posts/PostItem";
import {usePosts} from "@/screens/blog/posts/usePosts";
import SkeletonLoader from "@/ui/skeleton-loader/SkeletonLoader";

const AllPosts: FC = () => {
    const {
        createAsync,
        data,
        isLoading,
        deleteAsync,
        searchTerm,
        handleSearch,
    } = usePosts()
    console.log(data)
    const posts = [{
        id: 1,
        author: 'Наталья',
        title: 'Процесс нанесения перманентного макияжа',
        description: 'Перманентный макияж PMU Lips, также известный как микропигментация или косметическое татуирование, является инновационной техникой, позволяющей подчеркнуть естественную красоту и достичь долговременного идеального внешнего вида Этот процесс становится все более популярным, поскольку он обеспечивает безупречные результаты, которые продержатся на протяжении длительного времени',
        photo: '/posts/post3.jpg',
        created_at: 'Воскреснье, 10:3',
        updated_at:'fsd'
    },
    ]
    const ada=(dta:any=data)=>{
        console.log(dta)}
   return (
        <div className={'flex-col items-center flex '}>
            {isLoading ? (
                <SkeletonLoader count={5} />
            ) : (
            <div

                className={'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-4 lg:grid-rows-3 xl:grid-rows-2 gap-4 place-items-center place-content-center mb-2'}>
                {data?.map(elem => {
                    return <PostItem key={elem.items.id} post={elem.items}/>
                })}
            </div>)}
            <button className={'btn-primary p-3 px-28 text-2xl'}>Показать ещё</button>
        </div>
    );
};

export default AllPosts;