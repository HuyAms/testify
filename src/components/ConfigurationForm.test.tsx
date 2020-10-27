import React from 'react'
import './matchMedia.mock'
import user from '@testing-library/user-event'
import {render, waitFor, fireEvent} from '@testing-library/react'
import ConfigurationForm from './ConfigurationForm'
import {Size} from '../models/Machine'
import {sendFormToServer as mockedSendFormToServer} from '../utils/apiUtil'

jest.mock('../utils/apiUtil')

describe('ConfigurationForm', () => {
	// let mockedSendFormToServer
	//
	// beforeEach(() => {
	// 	mockedSendFormToServer = sendFormToServer as jest.Mock<any>
	// })

	it('renders a size and capacity input', () => {
		const {getByLabelText, getByText} = render(<ConfigurationForm />)
		getByLabelText(/size/i)
		getByLabelText(/capacity/i)
		getByText(/Calculate/i)
	})

	it('size should be less than 10', () => {
		const {getByLabelText, getByRole} = render(<ConfigurationForm />)
		const input = getByLabelText(/capacity/i)
		user.type(input, '11')

		waitFor(() => {
			expect(getByRole('alert')).toHaveTextContent(
				/'capacity' cannot be greater than 10/i,
			)
		})
	})

	it('should send form data with correct value to the server', () => {
		// Arrange
		;(mockedSendFormToServer as jest.Mock).mockResolvedValueOnce({
			statusCode: 200,
			message: 'Success sent data to server dm',
		})

		const {getByText, getByLabelText} = render(<ConfigurationForm />)
		const submitButton = getByText(/Calculate/i)

		const mockedSizeValue = Size._size1
		const mockedCapacityValue = '9'

		// Act
		user.type(getByLabelText(/size/i), mockedSizeValue)
		user.type(getByLabelText(/capacity/i), mockedCapacityValue)

		fireEvent.click(submitButton)

		// Assert

		waitFor(() => {
			expect(mockedSendFormToServer).toHaveBeenCalledWith({
				size: mockedSizeValue,
				capacity: mockedCapacityValue,
			})

			expect(mockedSendFormToServer).toHaveBeenCalledTimes(1)
		})
	})
})
