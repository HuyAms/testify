const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: isTest ? 'common.js' : false,
			},
		],
		'@babel/preset-react',
		'@babel/preset-typescript',
	],
	plugins: [
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-syntax-dynamic-import',
		'react-hot-loader/babel',
	],
	env: {
		production: {
			only: ['src'],
			plugins: [
				'transform-react-remove-prop-types',
				'@babel/plugin-transform-react-inline-elements',
				'@babel/plugin-transform-react-constant-elements',
			],
		},
	},
}
