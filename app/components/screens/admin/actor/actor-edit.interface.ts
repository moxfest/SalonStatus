import { IActor } from '@/shared/types/movie.types'
import {IPost} from "@/shared/types/blog.types";

export interface IActorEditInput extends Omit<IPost, '_id' | 'countMovies'> {}
