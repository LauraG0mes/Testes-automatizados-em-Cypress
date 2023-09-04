module.exports = {
	'env': {
		'es2021': true,
		'cypress/globals': true,
		'node': true
	},
	'plugins': [
		'cypress'
	],
	'extends': [
		'eslint:recommended',
		'plugin:cypress/recommended'
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'ident': 'off',
		'linebreak-style': 0,
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'cypress/no-assigning-return-values': 'error',
		'cypress/no-unnecessary-waiting': 'error',
		'cypress/assertion-before-screenshot': 'warn',
		'cypress/no-force': 'off',
		'cypress/no-async-tests': 'error',
		'cypress/no-pause': 'error'
	}
}