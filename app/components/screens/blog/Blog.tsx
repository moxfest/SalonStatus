import {FC} from 'react';
import PostItem from "@/screens/blog/posts/PostItem";
import {IPost} from "@/shared/types/blog.types";


const Blog: FC<{posts:IPost}> = ({posts}) => {

    return (
        <div>
            <PostItem post={posts}/>
        </div>
    );
};

export default Blog;