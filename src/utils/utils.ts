export const enumToValues = <T>(enumObject, isNumberEnum?: boolean): T[] => {
	const array = Object.keys(enumObject)
		.map((k: string) => enumObject[k])
		.filter(val => typeof val === (!isNumberEnum ? 'string' : 'number'))

	return array
}
