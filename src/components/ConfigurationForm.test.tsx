import React from 'react'
import './matchMedia.mock'
import {render} from '@testing-library/react'
import ConfigurationForm from './ConfigurationForm'

describe('ConfigurationForm', () => {
	it('renders a size and capacity input', () => {
		const {getByLabelText} = render(<ConfigurationForm />)
		getByLabelText(/size/i)
		getByLabelText(/capacity/i)
	})
})
