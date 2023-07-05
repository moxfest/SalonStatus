export interface IUser {
	id: string
	email: string
	password: string
	createdAt: string
	updatedAt: string
	role: {id:number,value:string,description:string}
}
