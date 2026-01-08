/** @type {import('stylelint').Config} */
export default {
	extends: ['@w0s/stylelint-config'],
	ignoreFiles: ['dist/**/*.css'],
	rules: {
		'plugin/root-colors': null,
		'plugin/use-logical-properties-and-values': true,
	},
};
