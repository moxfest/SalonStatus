export const API_URL = `${'http://192.168.0.107:4200'}/api`
export const API_URL_UPLOADS = 'http://192.168.0.107:4200/uploads'

export const getAuthUrl = (string: string) => `/auth${string}`
export const getRoles = (string: string) => `/role${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getMoviesUrl = (string: string) => `/movies${string}`
export const getGenresUrl = (string: string) => `/genres${string}`
export const getActorsUrl = (string: string) => `/actors${string}`
export const getPostsUrl = (string: string) => `/posts${string}`
export const getRatingsUrl = (string: string) => `/ratings${string}`
