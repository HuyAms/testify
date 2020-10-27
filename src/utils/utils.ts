export const enumToValues = (enumObject, isNumberEnum?: boolean) => {
	const array = Object.keys(enumObject)
		.map((k: string) => enumObject[k])
		.filter(val => typeof val === (!isNumberEnum ? 'string' : 'number'))

	return array
}
