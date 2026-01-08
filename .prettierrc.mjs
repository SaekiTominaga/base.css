/** @type {import("prettier").Config} */
const config = {
	singleQuote: true,

	overrides: [
		{
			files: '*.css',
			options: {
				parser: 'css',
				singleQuote: false,
			},
		},
	],
};
export default config;
