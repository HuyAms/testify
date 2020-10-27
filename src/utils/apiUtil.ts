export const sendFormToServer = value => {
	console.log('Send to the server: ', value)
	return Promise.resolve({
		statusCode: 200,
		message: 'Success sent data to server',
	})
}
