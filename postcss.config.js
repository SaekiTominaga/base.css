import pluginDiscardComments from 'postcss-discard-comments';
import pluginImport from 'postcss-import';
import pluginNesting from 'postcss-nesting';

/** @type {import('postcss-load-config').Config} */
export default {
	plugins: [
		pluginDiscardComments({
			remove: (comment) => comment.startsWith('*') || comment.startsWith(' TODO: ') || comment.startsWith('stylelint-'),
		}),
		pluginImport(),
		pluginNesting(),
	],
};
