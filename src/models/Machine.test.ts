import {Size} from './Machine'

describe('Machine', () => {
	it('should have a correct Size enum', () => {
		expect(Size).toMatchSnapshot()
	})
})
