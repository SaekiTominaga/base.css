import { defineConfig } from 'vite';

/**
 * @typedef {import('vite').PreviewServer} PreviewServer
 * @typedef {import('vite').ViteDevServer} ViteDevServer
 */

/**
 * @param {PreviewServer | ViteDevServer} server
 * @returns {void}
 */
const contentTypeCharset = (server) => {
	server.middlewares.use((_req, res, next) => {
		const writeHead = res.writeHead.bind(res);
		res.writeHead = (...args) => {
			const contentType = res.getHeader('Content-Type');
			if (typeof contentType === 'string' && ['text/html', 'text/css', 'text/javascript'].includes(contentType)) {
				res.setHeader('Content-Type', `${contentType};charset=utf-8`);
			}
			return writeHead(...args);
		};
		next();
	});
};

export default defineConfig({
	server: {
		open: '/demo/',
	},
	plugins: [
		{
			name: 'content-type-charset',
			configureServer(server) {
				contentTypeCharset(server);
			},
		},
	],
});
