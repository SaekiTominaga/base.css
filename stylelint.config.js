/** @type {import('stylelint').Config} */
export default {
	extends: ['@w0s/stylelint-config'],
	ignoreFiles: ['dist/**/*.css'],
	rules: {
		'plugin/root-colors': null,
	},
	overrides: [
		{
			files: ['src/_reset.css'],
			rules: {
				'property-disallowed-list': null,
			},
		},
	],
};
