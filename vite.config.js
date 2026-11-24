import { defineConfig } from 'vite';

const contentTypeCharset = () => {
	return {
		name: 'content-type-charset',
		configureServer(server) {
			server.middlewares.use((_req, res, next) => {
				const writeHead = res.writeHead.bind(res);
				res.writeHead = (status, ...args) => {
					const contentType = res.getHeader('Content-Type');
					if (['text/html', 'text/css', 'text/javascript'].includes(contentType)) {
						res.setHeader('Content-Type', `${contentType};charset=utf-8`);
					}
					return writeHead(status, ...args);
				};
				next();
			});
		},
	};
};

export default defineConfig({
	server: {
		open: '/demo/',
	},
	plugins: [contentTypeCharset()],
});
