export const convertMongoDate = (date: string) => {
const dateee=new Date(date)
	const dateString = dateee.toLocaleDateString('ru', );
	const timeString = dateee.toLocaleTimeString(['ru-RU'], );
	console.log('hello')
	return dateString
}
