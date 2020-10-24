// eslint-disable-next-line no-undef
module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/config/testing/setupTests.ts'],
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/**/*.test.{js,jsx,ts,tsx}',
		'!src/index.tsx',
		'!src/App.tsx',
	],
	preset: 'ts-jest',
	// individual test will be reported
	verbose: true,
	// Automatically clear mock calls and instances between every test
	clearMocks: true,
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node', 'json'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/config/testing/__mocks__/fileMock.ts',
		'\\.(css|less|sass|scss)$':
			'<rootDir>/config/testing/__mocks__/styleMock.ts',
	},
	// Where Jest detectes test files
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.{ts,tsx,js,jsx}',
		'<rootDir>/src/**/?(*.)(spec|test).{ts,tsx,js,jsx}',
	],
}
