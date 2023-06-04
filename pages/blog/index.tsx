import ListBlog from '@/components/screens/blog/ListBlog'

import {NextPage} from "next";


export interface ListBlog{

}
const ListBlogPage: NextPage<ListBlog> = (props) => {
    return <ListBlog {...props}/>
}


export default ListBlogPage
