import {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from 'next'


import { IActorPage } from '@/components/screens/actor/actor.types'

import Blog from '@/components/screens/blog/Blog'

import {BlogService} from "@/services/blog/blog.service";
import {GenreService} from "@/services/genre/genre.service";
import {IPost} from "@/shared/types/blog.types";

const BlogPage: NextPage<IActorPage> = ({post}) => {

    return <Blog posts={post} />
}

export const getServerSideProps: GetServerSideProps<{
    post: IPost
}> = async () => {
    const data = await BlogService.getBySlug(String(1))

    return {props: {post:data.data} }
}

export default BlogPage