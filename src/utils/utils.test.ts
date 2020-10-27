import {enumToValues} from './utils'

describe('Utils', () => {
	it('should convert enum to array value', () => {
		enum Role {
			admin = 'admin',
			user = 'user',
		}

		const values = enumToValues(Role)
		const expectedValues = ['admin', 'user']
		expect(values).toEqual(expectedValues)
	})
})
