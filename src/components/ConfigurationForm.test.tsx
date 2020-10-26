import React from 'react'
import './matchMedia.mock'
import user from '@testing-library/user-event'
import {render, waitFor} from '@testing-library/react'
import ConfigurationForm from './ConfigurationForm'

describe('ConfigurationForm', () => {
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
})
