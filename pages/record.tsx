import ListBlog from '@/components/screens/blog/ListBlog'

import {GetServerSideProps, GetStaticPaths, GetStaticProps, InferGetServerSidePropsType, NextPage} from "next";

import {IPost} from "@/shared/types/blog.types";
import Record from "@/screens/record/record";




const RecordPage: NextPage<{posts:IPost[]}> = ({posts}) => {
    return <Record />
}
// export const getStaticPaths: GetStaticPaths = async () => {
//     try {
//         const { data: movies } = await MovieService.getMovies()
//         const paths = movies.map((movie) => ({
//             params: { slug: movie.slug },
//         }))
//
//         return { paths, fallback: 'blocking' }
//     } catch {
//         return {
//             paths: [],
//             fallback: false,
//         }
//     }
// }
//
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     try {
//         const { data: movie } = await MovieService.getBySlug(String(params?.slug))
//
//         const responseSimilarMovies = await MovieService.getByGenres(
//             movie.genres.map((g) => g._id)
//         )
//
//         const similarMovies: IGalleryItem[] = responseSimilarMovies.data
//             .filter((m) => m._id !== movie._id)
//             .map((m) => ({
//                 name: m.title,
//                 posterPath: m.poster,
//                 url: getMovieUrl(m.slug),
//             }))
//
//         return {
//             props: { movie, similarMovies },
//         }
//     } catch (e) {
//         console.log(errorCatch(e))
//
//         return {
//             notFound: true,
//         }
//     }
// }

// export const getStaticProps: GetStaticProps = async () => {
//     try {
//         const { data: posts } = await BlogService.getAll()
//
//         return {
//             props: { posts },
//         }
//     } catch (e) {
//         // console.log(errorCatch(e))
//
//         return {
//             props: {},
//             // notFound: true,
//         }
//     }
// }
export default RecordPage;